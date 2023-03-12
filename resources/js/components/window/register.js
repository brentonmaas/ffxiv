import React, {Component} from 'react';
import Window from '../../core/window';
import Layout_Register from "../layout/register";

class Window_Register extends Component {

    constructor(props) {
        super(props);

        this.id = "registration";
        this.name = "Registration Form";
        this.height = "600px";
        this.width = "1000px";
        this.noPadding = true;
        this.closeFunction = function (){

        };

        for(let index in props)
        {
            this[index] = props[index];
        }

        window.components.window.register = this;
    }


    render() {

        return (
            <Window
                id={this.id}
                name={this.name}
                height={this.height}
                width={this.width}
                noPadding={this.noPadding}
                closeFunction={this.closeFunction}
                content={<Layout_Register/>}
            />
        );
    }

}

export default Window_Register;
