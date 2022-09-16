import React, {Component} from 'react';

class Button_Window extends Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol: '',
            handler: function() {

            },
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    render() {
        return (
            <div className="button-window" onClick={this.state.handler}>
                <i className={this.state.symbol}></i>
            </div>
        );
    }

}

export default Button_Window;
