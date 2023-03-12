import Menu from '../../core/menu';
import cursor from '../../../../public/images/hand.gif';
import '../../../css/menu/main.css';
import React, {Component} from "react";
import Config from '../../config';

class Menu_Main extends Component {

    constructor(props) {
        super(props);

        this.id = 'main';
        this.menuClass = 'menu-main';
        this.currentMenuIndex = 0;
        this.newMenuIndex = 0;
        this.active = true;

        for(let index in props)
        {
            this[index] = props[index];
        }

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

        window.components.menu.main = this;

        this.initialize();
    }

    initialize() {
        window.onkeydown = this.keyPressEvent.bind(this);
    }

    componentDidMount() {
        axios.get(Config.url + '/api/menu_item')
            .then(response => {
                this.setState({
                    items: response.data,
                    isLoaded: true,
                });
            })
            .catch(function (error) {
                this.state.error = error;
                console.log(error);
            })
    }

    keyPressEvent(event) {

        if(this.active) {

            switch(event.code) {

                case 'ArrowUp': {
                    this.newMenuIndex = this.currentMenuIndex - 1;

                    if(this.newMenuIndex >= 0) {

                        let id = this.state.items[this.newMenuIndex].id;
                        this.setMenuItemHovered(id);

                        let index = this.state.items[this.newMenuIndex].index;
                        this.setCursorPosition(index);
                        this.currentMenuIndex = this.newMenuIndex;
                    }
                    break;
                }
                case 'ArrowDown': {
                    this.newMenuIndex = this.currentMenuIndex + 1;

                    if(this.newMenuIndex < this.state.items.length) {

                        let id = this.state.items[this.newMenuIndex].id;
                        this.setMenuItemHovered(id);

                        let index = this.state.items[this.newMenuIndex].index;
                        this.setCursorPosition(index);
                        this.currentMenuIndex = this.newMenuIndex;
                    }
                    break;
                }
                case 'Enter': {
                    this.selectMenuItem(this.currentMenuIndex);
                    break;
                }
            }
        }
    }

    selectMenuItem(option_index) {
        this.items[option_index].click();
    }

    showLoginForm() {

    }

    showRegistrationForm() {
        this.playMenuSelectEffect();
        this.disableMenu();
        $('#window-registration').fadeIn();
    }

    disableMenu() {
        this.active = false;
    }

    enableMenu() {
        this.active = true;
    }

    playMenuSwitchEffect() {
        const audio = document.getElementById('menu-main-switch-cursor');
        audio.play();
    }

    playMenuSelectEffect() {
        const audio = document.getElementById('menu-main-select');
        audio.play();
    }

    setMenuItemHovered(id) {

        let itemId = 'menu-' + this.id + '-item-' + id;
        let menuClass = this.menuClass;

        $('div[id^="menu-' + this.id + '-item"]').each( function() {
            let item = $(this);

            if (item.attr('id') === itemId) {
                item.removeClass(menuClass + '-item');
                item.addClass(menuClass + '-item-hovered');
            } else {
                item.addClass(menuClass + '-item');
                item.removeClass(menuClass + '-item-hovered');
            }
        });
    }

    setCursorPosition(index) {
        let cursor = $('.menu-main-cursor-container');

        switch(index) {
            case 'login': {
                cursor.css('top','0px');
                cursor.css('left','105px');
                break;
            }
            case 'register': {
                cursor.css('top','32px');
                cursor.css('left','70px');
                break;
            }
        }

        //Set currentMenuIndex
        for(let i in this.state.items) {
            if(index === this.state.items[i].index) {
                this.currentMenuIndex = i;
            }
        }

        //sound
        this.playMenuSwitchEffect();
    }

    getContent() {
        return(
            <div className="menu-main-cursor-container">
                <img src={cursor} className="menu-main-cursor" alt="hand" />
                <audio id="menu-main-switch-cursor">
                    <source src="/sound/menu/cursor_move.mp3"/>
                </audio>
                <audio id="menu-main-select">
                    <source src="/sound/menu/menu_select.mp3"/>
                </audio>
            </div>
        );
    }

    render() {
        let content = this.getContent();

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="menu-main-loader">Loading...</div>;
        } else {
            //bind events
            for(let i in items) {

                //click event
                items[i].handler = this[items[i].handler].bind(this);

                //mouseover
                items[i].mouseover = this.setCursorPosition.bind(this, items[i].index);
            }

            return (
                <Menu
                    id={this.id}
                    content={content}
                    items={items}
                    menuClass={this.menuClass}
                />
            );
        }
    }
}

export default Menu_Main;

