import React, {Component} from 'react';
import '../../css/core/menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);

        /**
         * Set Defaults:
         *
         * Example Item fields
         * @type [{id: int, index: string, text: string, mouseover: function, handler: function}]
         */
        this.items = [];
        this.id = 'core';
        this.display = true;
        this.menuClass = 'menu-core';
        this.content ='';

        for(let index in props)
        {
            this[index] = props[index];
        }
    }

    itemClick(event) {

        let itemId = event.target.id;

        for(let i in this.items) {

            if(itemId === 'menu-' + this.id +'-item-' + this.items[i].id) {
                this.items[i].handler();
            }
        }
    }

    itemMouseOver(event) {

        let itemId = event.target.id;
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

        for(let i in this.items) {
            if(itemId === 'menu-' + this.id +'-item-' + this.items[i].id) {
                this.items[i].mouseover();
            }
        }

    }

    render() {
        let items = this.items;

        return (
            <div id={"menu-" + this.id} className={this.menuClass}>
                {items.map(function(item, i){
                    return (<div key={i}
                                 id={'menu-' + this.id + '-item-' + item.id}
                                 className={this.menuClass + '-item'}
                                 onMouseOver={this.itemMouseOver.bind(this)}
                                 onClick={this.itemClick.bind(this)}>{item.text}</div>)
                }, this)}
                {this.content}
            </div>
        );
    }
}

export default Menu;

