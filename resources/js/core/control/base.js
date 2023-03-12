import React, {Component} from 'react';
import '../../../css/core/control.css';

class Control_Base extends Component {

    constructor(props) {
        super(props);

        this.id = '';
        this.value = '';
        this.label = '';
        this.labelWidth = '30%';
        this.hideLabel = false;
        this.controlWidth = '50%';
        this.description = '';
        this.descriptionWidth = '20%';
        this.hideDescription = false;
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
            meter: false,
        };
    }

    handleChange(e) {
        this.state.value = e.target.value;
        this.onChange(e);
    }

    getLabel() {

        let label;
        let labelStyle = {
            width: this.labelWidth
        }

        if (!this.hideLabel) {
            label = <div className="control-core-label" style={labelStyle}>{this.label+':'}</div>;
        }
        else {
            label = '';
        }

        return label;
    }

    getControl() {
        let control_style = {
            width: this.controlWidth
        }

        return (
            <div
                id={this.id}
                className="control-core-base"
                onChange={this.handleChange.bind(this)}
                style={control_style}
                >{this.state.value}
            </div>
        );
    }

    getDescription() {

        let description;

        let description_style = {
            width: this.descriptionWidth
        }

        if (!this.hideDescription) {
            description = <div className="control-core-description" style={description_style}>{this.description}</div>
        }
        else {
            description = '';
        }

        return description;
    }

    getError() {

        const error_style = {
            paddingLeft: this.labelWidth
        }

        return (
            <div className="control-core-error" style={error_style}>{this.state.error}</div>
        );
    }

    render() {



        return (
            <label className="control-core-container">
                {this.getLabel()}
                {this.getControl()}
                {this.getDescription()}
                {this.getError()}
            </label>
        );
    }

}

export default Control_Base;
