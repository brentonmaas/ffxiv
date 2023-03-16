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
        this.id = 'core';
        this.display = true;
        this.active = true;
        this.menuClass = 'menu-core';

        for(let index in props)
        {
            this[index] = props[index];
        }

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    disableMenu() {
        this.active = false;
    }

    enableMenu() {
        this.active = true;
    }

    itemClick(event) {

        let itemId = event.target.id;

        for(let i in this.state.items) {

            if(itemId === 'menu-' + this.id +'-item-' + this.state.items[i].id) {
                this.state.items[i].handler();
            }
        }
    }

    itemMouseOver(event) {

        let itemId = event.target.id;
        this.setMenuItemHovered(itemId);

        let items = this.state.items;

        for(let i in items) {

            let currentItemId = 'menu-' + this.id + '-item-' + items[i].id;

            if(currentItemId === itemId) {
                items[i].mouseover();
            }
        }
    }

    setMenuItemHovered(itemId) {

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

    handleResponse(error) {
        this.setState({error: error});
    }

    render() {
        let content = this.getContent();

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="menu-main-loader">Loading...</div>;
        } else {
            return (
                <div id={"menu-" + this.id} className={this.menuClass}>
                    {items.map(function(item, i){
                        return (<div key={i}
                                     id={'menu-' + this.id + '-item-' + item.id}
                                     className={this.menuClass + '-item'}
                                     onMouseOver={this.itemMouseOver.bind(this)}
                                     onClick={this.itemClick.bind(this)}>{item.text}</div>)
                    }, this)}
                    {content}
                </div>
            );
        }
    }
}

export default Menu;

