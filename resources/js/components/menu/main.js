import React, {Component} from 'react';

class Menu_Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                text: "LOGIN",
                click: this.showLoginForm.bind(this)
            },{
                text: "REGISTER",
                click: this.showRegistrationForm.bind(this)
            }],
        };
    }

    showLoginForm() {

    }

    showRegistrationForm = () => {
        console.log('mooo');
    }

    render() {
        return (
            <div className="menu-main">
                <div className="menu-main-item" onClick={this.state.items[0].click}>{this.state.items[0].text}</div>
                <div className="menu-main-item" onClick={() => this.showRegistrationForm()}>{this.state.items[1].text}</div>
            </div>

        );
    }
}

export default Menu_Main;

