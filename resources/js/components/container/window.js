import React, {Component} from 'react';
import Button_Window from "../button/window";

class Container_Window extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            body: '',
            width: '100%',
            height: '100%',
            nopadding: false,
            onclose: function() {

            }
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    closeWindow() {
        $('#'+this.state.id).fadeOut();
        this.state.onclose();
    }

    render() {

        const window_style = {
            width: this.state.width,
            height: this.state.height,
        };

        const panel_style = {
            background: "transparent"
        }

        let panel_body_style = {}

        if(this.state.nopadding)
        {
            panel_body_style = {

                padding: '0px',
            }
        }

        return (
            <div className="window" id={this.state.id} style={window_style}>
                <div className="button-window-container">
                    <Button_Window symbol="fa-solid fa-xmark button-window-icon" handler={this.closeWindow.bind(this)} />
                </div>
                <div className="card panel h-100" style={panel_style}>
                    <div className="card-header panel-header">{this.state.name}</div>
                    <div className="card-body panel-transparent" style={panel_body_style}>{this.state.body}</div>
                </div>
            </div>
        );
    }

}

export default Container_Window;
