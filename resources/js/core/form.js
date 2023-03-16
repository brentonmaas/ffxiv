import React, {Component} from 'react';
import '../../css/core/form.css';
import '../../css/core/button.css';
import {Button} from "react-bootstrap";
import Control_Base from "./control/base";
import Control_Text from "./control/text";
import Control_Password from "./control/password";
import Control_Checkbox from "./control/checkbox";
import Config from "../config";

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
        this.formData = {};
        this.callback = function() {
            //empty by default
        }

        for(let index in props)
        {
            this[index] = props[index];
        }

        this.state = {
            message: '',
            error: false
        }
    }

    handleSubmit() {

        let result = this.validate();

        if(result.success) {
            this.postForm();
        }
    }

    handleChange(field, e) {

        for(let i in this.fields) {

            if(this.fields[i].id === field) {
                switch(this.fields[i].type) {
                    case 'checkbox': {
                        if(e.target.checked) {
                            this.fields[i].value = 1;
                        }
                        else {
                            this.fields[i].value = 0;
                        }
                        break;
                    }
                    default: {
                        this.fields[i].value = e.target.value;
                        break;
                    }
                }
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
                fields[i].ref.current.setState({ error : message, meter: true });

                $('#' + this.id+"-"+fields[i].id).addClass('control-core-input-error');
            }
            else {

                fields[i].ref.current.setState({ error : '' });
                $('#' + this.id+"-"+fields[i].id).removeClass('control-core-input-error');
            }
        }

        return result;
    }

    prepData() {
        let data = {};
        let fields = this.fields;

        for(let i in fields) {
            if(fields[i].post) {

                let index = fields[i].id;
                index = index.replace(/-/g, '_');
                data[index] = fields[i].value;
            }
        }

        return data;
    }

    postForm() {

        let loader = this.getLoader();

        this.setState({message: loader});

        this.formData = this.prepData();
        const handleResponse = this.handleResponse.bind(this);

        axios.post(Config.url + '/api/register', this.formData)
            .then(response => {
                handleResponse(response, false);
            })
            .catch(error => {
                if(error.response) {
                    if (error.response.data.errors) {
                        handleResponse(error.response.data.errors, true);
                    }
                }
            });
    }

    handleResponse(response, error) {
        if(error) {
            this.setState({message: 'There were some errors on the form.', error: true});

            let fields = this.fields;

            for(let i in fields) {
                for(let fieldIndex in response) {
                    if (fields[i].id === fieldIndex) {

                        let errors = response[fieldIndex];
                        let message = '*';

                        for(let j in errors) {
                            message += ' ' + errors[j];
                        }

                        fields[i].ref.current.setState({error: message, meter: true});
                        $('#' + this.id + "-" + fields[i].id).addClass('control-core-input-error');
                    }
                }
            }
        }
        else {
            this.setState({message: 'Submission Successful.', error: false});
            debugger;
            this.callback(response);
        }
    }

    getLoader() {
        return (
            <div className="form-core-loader">Submitting...</div>
        );
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

    clearForm() {

    }

    render() {
        let fields = this.fields;
        let messageColor = '#009821';

        if(this.state.error) {
            messageColor = '#e30f0f';
        }

        const messageStyle = {
            color: messageColor
        }

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
                <div className="form-core-footer">
                    <Button variant="primary" className="button-core" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                    <div className="form-core-message" style={messageStyle}>{this.state.message}</div>
                </div>
            </form>
        );
    }

}

export default Form;
