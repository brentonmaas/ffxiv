import React, {Component} from 'react';
import Form_Control_Basic from "./basic";

class Form_Control_Checkbox extends Form_Control_Basic {

    getControl() {

        let control;

        let control_style = {
            width: '23px',
            marginTop: '3px',
        }

        control = <input type="checkbox" name={this.state.id} id={this.state.id} className="form-control-input" style={control_style} defaultValue={this.state.value} />

        return control;
    }
}

export default Form_Control_Checkbox;
