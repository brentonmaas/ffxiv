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
            selected: 0
        };

        window.main_menu = this;
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

    showLoginForm() {

    }

    showRegistrationForm() {
        console.log('mooo');
    }

    render() {

        let items = this.state.items;

        return (
            <div className="menu-main">
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
            </div>
        );
    }
}

export default Menu_Main;

