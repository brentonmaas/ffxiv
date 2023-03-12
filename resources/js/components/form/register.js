import React, {Component} from 'react';
import Form from "../../core/form";
import '../../../css/form/register.css';

class Form_Register extends Form {

    constructor(props) {
        super(props);
        this.id = 'register';

        for(let index in props)
        {
            this[index] = props[index];
        }

        this.fields = [
            {
                type: 'base',
                id: 'content',
                label: '',
                required: false,
                value: this.getContent(),
                hideLabel: true,
                hideDescription: true,
                controlWidth: '100%',
            },{
                type: 'text',
                id: 'username',
                label: 'Username',
                required: true,
                value: '',
            },{
                type: 'password',
                id: 'password',
                label: 'Password',
                required: true,
                value: '',
            },{
                type: 'password',
                id: 'confirm-password',
                label: 'Confirm Password',
                required: true,
                value: '',
            },{
                type: 'text',
                id: 'email',
                label: 'Email',
                required: true,
                value: '',
            },{
                type: 'checkbox',
                id: 'can-email',
                label: '',
                required: false,
                value: '',
                descriptionWidth: 'calc(100% - 23px)',
                hideLabel: true,
                description: ' I agree to receive emails from Magitek Terminal about new features, new products and newsletters.You can opt out at any time using the link provided within our emails.'
            }
        ];

        this.errors = {};
    }

    validate() {

        let result = {
            success: true,
            errors: {}
        }

        let fields = this.fields;
        let password = '';

        //handle validation here
        for(let i in fields) {

            result.errors[fields[i].id] = [];

            if(fields[i].required && !fields[i].value) {

                let message = '*' + fields[i].label + " is required and cannot be empty";

                result.success = false;
                result.errors[fields[i].id].push(message);

                fields[i].ref.current.setState({ error : message });
                $('#' + this.id+"-"+fields[i].id).addClass('control-core-input-error');
            }
            else {

                fields[i].ref.current.setState({ error : '' });
                $('#' + this.id+"-"+fields[i].id).removeClass('control-core-input-error');
            }

            switch(fields[i].id) {
                case 'password': {
                    password = fields[i].value;
                    break;
                }
                case 'confirm-password': {
                    if(fields[i].value !== password) {
                        let message = '*' + fields[i].label + " does not match password entered";

                        result.success = false;
                        result.errors[fields[i].id].push(message);

                        fields[i].ref.current.setState({ error : message });
                        $('#' + this.id+"-"+fields[i].id).addClass('control-core-input-error');
                    }
                    else {

                        if(result.errors[fields[i].id].length === 0) {
                            fields[i].ref.current.setState({ error : '' });
                            $('#' + this.id+"-"+fields[i].id).removeClass('control-core-input-error');
                        }
                    }
                    break;
                }
            }
        }

        return result;
    }

    checkPasswordStrength() {
        const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
        const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
        const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
        const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
        const eightCharsOrMore= /.{8,}/g; // eight characters or more
    }

    getContent() {
        return (
            <div>
                <div className="form-register-text">
                    Use our character builder to manage your spells, hit
                    <div className="form-register-spacer"></div>
                    points, and gear. Fully customizable digital character
                    <div className="form-register-spacer"></div>
                    sheet. Build your encounters and track turns with our
                    <div className="form-register-spacer"></div>
                    Magitek Terminal DM tool. Combined Dungeons &
                    <div className="form-register-spacer"></div>
                    Dragons & Final Fantasy XIV digital content
                </div>
            </div>
        );
    }
}

export default Form_Register;
