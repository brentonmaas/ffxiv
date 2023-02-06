import React, {Component} from 'react';
import Form_Control_Basic from "./basic";

class Form_Control_Password extends Form_Control_Basic {

    getControl() {

        let control;

        let control_style = {
            width: this.state.control_width
        }

        control = <input type="password" name={this.state.id} id={this.state.id} className="form-control-input" style={control_style} defaultValue={this.state.value} />

        return control;
    }

}

export default Form_Control_Password;
