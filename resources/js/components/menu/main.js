import React, {Component} from 'react';

export default class Menu_Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                text: "LOGIN",

            },{
                text: "REGISTER",
            }],
        };
    }

    render() {
        return (
            <div className="menu-main">
                <div className="menu-main-item">{this.state.items[0].text}</div>
                <div className="menu-main-item">{this.state.items[1].text}</div>
            </div>

        );
    }
}

