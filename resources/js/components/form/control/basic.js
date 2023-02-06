import React, {Component} from 'react';

class Form_Control_Basic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            value: '',
            label: '',
            label_width: '30%',
            hide_label: false,
            control_width: '50%',
            description: '',
            description_width: '20%',
            required: false
        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    handleChange() {

    }

    getLabel() {

        let label;
        let label_style = {
            width: this.state.label_width
        }

        if (!this.state.hide_label) {
            label = <div className="form-control-label" style={label_style}>{this.state.label+':'}</div>;
        }
        else {
            label = '';
        }

        return label;
    }

    getControl() {

        let control;

        let control_style = {
            width: this.state.control_width
        }

        control = <input type="text" name={this.state.id} id={this.state.id} required={this.state.required} className="form-control-input" style={control_style} defaultValue={this.state.value} />

        return control;
    }

    getDescription() {

        let description;

        let description_style = {
            width: this.state.description_width
        }

        description = <div className="form-control-description" style={description_style}>{this.state.description}</div>

        return description;
    }

    render() {

        return (
            <label className="form-control-basic">
                {this.getLabel()}
                {this.getControl()}
                {this.getDescription()}
                <div className="form-padding-row"></div>
            </label>
        );
    }

}

export default Form_Control_Basic;
