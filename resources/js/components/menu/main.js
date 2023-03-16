import React, {Component} from "react";
import Menu from '../../core/menu';
import cursor from '../../../../public/images/hand.gif';
import '../../../css/menu/main.css';
import Config from '../../config';


class Menu_Main extends Menu {

    constructor(props) {
        super(props);

        this.id = 'main';
        this.menuClass = 'menu-main';
        this.display = true;
        this.active = true;

        //new class variables
        this.currentMenuIndex = 0;
        this.newMenuIndex = 0;

        for(let index in props)
        {
            this[index] = props[index];
        }

        this.state = {
            user: JSON.parse(localStorage.getItem('user').toString()),
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

        const handleResponse = this.handleResponse.bind(this);

        let loggedIn = 0;

        if(this.state.user) {
            loggedIn = 1;
        }

        axios.get(Config.url + '/api/menu_item/filter', { params: { menu_id: 1, login_required: loggedIn }})
            .then(response => {

                let items = response.data;

                //bind events
                for(let i in items) {
                    //click event
                    items[i].handler = this[items[i].handler].bind(this);
                    //mouseover
                    let itemId = 'menu-' + this.id +'-item-' + items[i].id;
                    items[i].mouseover = this.setCursorPosition.bind(this, itemId, items[i].index);
                }

                this.setState({
                    items: items,
                    isLoaded: true,
                });

                this.reset();
            })
            .catch(function (error) {
                handleResponse(error);
                console.log(error);
            });
    }

    reset() {
        this.currentMenuIndex = 0;

        let itemId = 'menu-' + this.id +'-item-' + this.state.items[this.currentMenuIndex].id;
        this.setMenuItemHovered(itemId);

        let index = this.state.items[this.currentMenuIndex].index;
        this.setCursorPosition(itemId, index);
    }

    keyPressEvent(event) {

        if(this.active) {

            switch(event.code) {

                case 'ArrowUp': {
                    this.newMenuIndex = this.currentMenuIndex - 1;

                    if(this.newMenuIndex >= 0) {

                        let itemId = 'menu-' + this.id +'-item-' + this.state.items[this.newMenuIndex].id;
                        this.setMenuItemHovered(itemId);

                        let index = this.state.items[this.newMenuIndex].index;
                        this.setCursorPosition(itemId, index);
                        this.currentMenuIndex = this.newMenuIndex;
                    }
                    break;
                }
                case 'ArrowDown': {
                    this.newMenuIndex = this.currentMenuIndex + 1;

                    if(this.newMenuIndex < this.state.items.length) {

                        let itemId = 'menu-' + this.id +'-item-' + this.state.items[this.newMenuIndex].id;
                        this.setMenuItemHovered(itemId);

                        let index = this.state.items[this.newMenuIndex].index;
                        this.setCursorPosition(itemId, index);
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
        this.state.items[option_index].handler();
    }

    showLoginForm() {

    }

    showRegistrationForm() {
        this.playMenuSelectEffect();
        this.disableMenu();
        $('#window-registration').fadeIn();
    }

    showCharacterSelection() {

    }

    createCharacter() {

    }

    logout() {

    }

    playMenuSwitchEffect() {
        const audio = document.getElementById('menu-main-switch-cursor');
        audio.play();
    }

    playMenuSelectEffect() {
        const audio = document.getElementById('menu-main-select');
        audio.play();
    }

    setCursorPosition(itemId, index) {

        let cursor = $('.menu-main-cursor-container');
        let menuItem = $('#' + itemId);

        const offset = menuItem.offset();
        let top = offset.top;
        let left = offset.left - 40;

        cursor.offset({ top: top, left: left});

        //Set currentMenuIndex
        for(let i in this.state.items) {
            if(index === this.state.items[i].index) {
                this.currentMenuIndex = parseInt(i);
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


}

export default Menu_Main;

