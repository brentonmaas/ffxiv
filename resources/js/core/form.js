import React, {Component} from 'react';
import '../../css/core/form.css';
import '../../css/core/button.css';
import {Button} from "react-bootstrap";
import Control_Base from "./control/base";
import Control_Text from "./control/text";
import Control_Password from "./control/password";
import Control_Checkbox from "./control/checkbox";

class Form extends Component {

    /**
     * These are base properties for form controls and need to be excluded
     * from the extra properties passed to the form controls
     * @type {string[]}
     */
    excludeFields = ['id','type','label','required','value'];

    constructor(props) {
        super(props);
        this.id = 'core';
        this.content = '';
        this.fields = [];
        this.errors = {};

        for(let index in props)
        {
            this[index] = props[index];
        }
    }

    handleSubmit() {

        let result = this.validate();
    }

    handleChange(field, e) {

        for(let i in this.fields) {

            if(this.fields[i].id === field) {
                this.fields[i].value = e.target.value;
            }
        }
    }

    validate() {

        let result = {
            success: true,
            errors: []
        }

        let fields = this.fields;

        //handle validation here
        for(let i in fields) {

            if(fields[i].required && !fields[i].value) {

                let message = '*' + fields[i].label + " is required and cannot be empty";

                result.success = false;
                result.errors.push(message);

                fields[i].ref.current.setState({ error : message });

                $('#' + this.id+"-"+fields[i].id).addClass('control-core-input-error');
            }
            else {

                fields[i].ref.current.setState({ error : '' });
                $('#' + this.id+"-"+fields[i].id).removeClass('control-core-input-error');
            }
        }

        return result;
    }

    postForm() {

    }

    getFieldControl(field, key) {

        let control = null;

        switch(field.type) {
            case 'base': {
                control = this.getBaseControl(field, key);
                break;
            }
            case 'text': {
                control = this.getTextControl(field, key);
                break;
            }
            case 'password': {
                control = this.getPasswordControl(field, key);
                break;
            }
            case 'checkbox': {
                control = this.getCheckboxControl(field, key);
                break;
            }
        }

        return control;
    }

    buildExtraProps(field) {

        let extraProps = {};

        for(let index in field) {
            if(this.excludeFields.indexOf(index) === -1) {
                extraProps[index] = field[index];
            }
        }

        return extraProps;
    }

    getBaseControl(field, key) {

        let extraProps = this.buildExtraProps(field);
        this.fields[key].ref = React.createRef();

        return (
            <Control_Base
                key={key}
                ref={this.fields[key].ref}
                id={this.id+"-"+field.id}
                label={field.label}
                required={field.required}
                onChange={this.handleChange.bind(this, field.id)}
                value={field.value}
                extraProps={extraProps}
            />
        );
    }

    getTextControl(field, key) {

        let extraProps = this.buildExtraProps(field);
        this.fields[key].ref = React.createRef();

        return (
            <Control_Text
                key={key}
                ref={this.fields[key].ref}
                id={this.id+"-"+field.id}
                label={field.label}
                required={field.required}
                onChange={this.handleChange.bind(this, field.id)}
                value={field.value}
                extraProps={extraProps}
            />
        );
    }

    getPasswordControl(field, key) {

        let extraProps = this.buildExtraProps(field);
        this.fields[key].ref = React.createRef();

        return (
            <Control_Password
                key={key}
                ref={this.fields[key].ref}
                id={this.id+"-"+field.id}
                label={field.label}
                required={field.required}
                onChange={this.handleChange.bind(this, field.id)}
                value={field.value}
                extraProps={extraProps}
            />
        );
    }

    getCheckboxControl(field, key) {

        let extraProps = this.buildExtraProps(field);
        this.fields[key].ref = React.createRef();

        return (
            <Control_Checkbox
                key={key}
                ref={this.fields[key].ref}
                id={this.id+"-"+field.id}
                label={field.label}
                required={field.required}
                onChange={this.handleChange.bind(this, field.id)}
                value={field.value}
                extraProps={extraProps}
            />
        );
    }

    render() {
        let fields = this.fields;

        return (
            <form id={'form-' + this.id} onSubmit={this.handleSubmit.bind(this)}>
                {this.content}
                {fields.map(function(field, key){
                    let fieldControl = this.getFieldControl(field, key);
                    this.fields[key].control = fieldControl;
                    return (
                        fieldControl
                    );
                }, this)}
                <Button variant="primary" className="button-core" onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </form>
        );
    }

}

export default Form;
