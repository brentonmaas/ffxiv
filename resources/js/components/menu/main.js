import React, {Component} from 'react';
import cursor from '../../../../public/images/hand.gif';

class Menu_Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                text: "LOGIN",
                id: "menu-main-item-login",
                class: "menu-main-item-hovered",
                click: this.showLoginForm.bind(this),
                mouseover: this.setCursorPosition.bind(this, 'menu-main-item-login')
            },{
                text: "REGISTER",
                id: "menu-main-item-register",
                class: "menu-main-item",
                click: this.showRegistrationForm.bind(this),
                mouseover: this.setCursorPosition.bind(this, 'menu-main-item-register')
            }],
            selected: 0,
            display: true,
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }

        window.main_menu = this;
    }

    selectMenuItem(option_index) {
        this.state.items[option_index].click();
    }

    setCursorPosition(option_id) {

        //Cursor move
        let cursor = $('.menu-main-cursor-container');

        switch(option_id)
        {
            case 'menu-main-item-login':
            {
                cursor.css('top','0px');
                cursor.css('left','105px');
                break;
            }
            case 'menu-main-item-register':
            {
                cursor.css('top','32px');
                cursor.css('left','70px');
                break;
            }
        }

        //Menu Item management
        $('div[id^="menu-main-item"]').each( function() {

            let item = $(this);

            if (item.attr('id') == option_id) {
                item.removeClass('menu-main-item');
                item.addClass('menu-main-item-hovered');
            } else {
                item.addClass('menu-main-item');
                item.removeClass('menu-main-item-hovered');
            }
        });

        //Set selected index
        for(let i in this.state)
        {
            if(option_id == this.state[i].id)
            {
                this.selected = i;
            }
        }

        //sound
        this.playMenuSwitchEffect();
    }

    playMenuSwitchEffect() {
        const audio = document.getElementById('menu-main-switch-cursor');
        audio.play();
    }

    playMenuSelectEffect() {
        const audio = document.getElementById('menu-main-select');
        audio.play();
    }

    showLoginForm() {

    }

    showRegistrationForm() {
        this.playMenuSelectEffect();
        this.hideMenu();
        $('#registration-window').fadeIn();
    }

    hideMenu() {
        this.state.display = false;
        $('#main-menu').hide();
    }

    showMenu() {
        this.state.display = true;
        $('#main-menu').show();
    }

    render() {

        let items = this.state.items;

        return (
            <div id="main-menu" className="menu-main">
                {items.map(function(item, i){
                    return (<div key={i}
                                 id={item.id}
                                 className={item.class}
                                 onMouseOver={item.mouseover}
                                 onClick={item.click}>{item.text}</div>)
                })}
                <div className="menu-main-cursor-container"><img src={cursor} className="menu-main-cursor" alt="hand" /></div>
                <audio id="menu-main-switch-cursor">
                    <source src="/sound/menu/cursor_move.mp3"></source>
                </audio>
                <audio id="menu-main-select">
                    <source src="/sound/menu/menu_select.mp3"></source>
                </audio>
            </div>

        );
    }
}

export default Menu_Main;

