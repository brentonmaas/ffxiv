import React, {Component} from 'react';
import Control_Base from "./base";

// noinspection DuplicatedCode
class Control_Checkbox extends Control_Base {

    constructor(props) {
        super(props);

        this.id = '';
        this.value = '';
        this.label = '';
        this.labelWidth = '30%';
        this.hideLabel = true;
        this.controlWidth = '50%';
        this.description = '';
        this.descriptionWidth = 'calc(100% - 23px)';
        this.required = false
        this.extraProps = {};

        for(let index in props)
        {
            this[index] = props[index];
        }

        for(let index in this.extraProps)
        {
            this[index] = this.extraProps[index];
        }

        this.state = {
            error: '',
            value: this.value,
        };
    }

    getControl() {

        let control_style = {
            width: '23px',
            marginTop: '3px',
        }

        return (
            <input
                type="checkbox"
                name={this.id}
                id={this.id}
                className="control-core-input"
                onChange={this.handleChange.bind(this)}
                style={control_style}
                defaultValue={this.state.value} />
        );
    }
}

export default Control_Checkbox;
