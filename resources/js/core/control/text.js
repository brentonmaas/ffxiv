import React, {Component} from 'react';
import '../../../css/core/control.css';
import Control_Base from "./base";

class Control_Text extends Control_Base {


    getControl() {

        let control;

        let control_style = {
            width: this.controlWidth
        }

        control = <input
            type="text"
            name={this.id}
            id={this.id}
            required={this.required}
            className="control-core-input"
            onChange={this.handleChange.bind(this)}
            style={control_style}
            defaultValue={this.state.value}
        />

        return control;
    }
}

export default Control_Text;
