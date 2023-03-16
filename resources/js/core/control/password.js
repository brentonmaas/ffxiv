import React, {Component} from 'react';
import Control_Base from "./base";

class Control_Password extends Control_Base {

    getControl() {

        let control_style = {
            width: this.controlWidth
        }

        return (
            <input
                type="password"
                name={this.id}
                id={this.id}
                required={this.required}
                className="control-core-input"
                onFocus={() => this.setState({ meter: true, focused: true})}
                onBlur={() => this.setState({ focused: false})}
                onChange={this.handleChange.bind(this)}
                style={control_style}
                defaultValue={this.value} />
        );
    }

    handleChange(e) {
        this.state.value = e.target.value;
        this.setState({ meter: true});
        this.onChange(e);
    }

    getError() {

        const password = this.state.value;

        const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
        const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
        const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
        const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
        const eightCharsOrMore= /.{8,}/g; // eight characters or more

        const passwordTracker = {
            uppercase: password.match(atLeastOneUppercase),
            lowercase: password.match(atLeastOneLowercase),
            number: password.match(atLeastOneNumeric),
            specialChar: password.match(atLeastOneSpecialChar),
            eightCharsOrGreater: password.match(eightCharsOrMore),
        }

        const passwordStrength = Object.values(passwordTracker).filter(value => value).length;
        let passwordStrengthText = '';
        let passwordColor = '#e30f0f';

        switch(passwordStrength) {
            case 0: {
                passwordStrengthText = 'Invalid';
                break;
            }
            case 1: {
                passwordStrengthText = 'Very Weak';
                break;
            }
            case 2: {
                passwordStrengthText = 'Weak';
                passwordColor = '#fea400';
                break;
            }
            case 3: {
                passwordStrengthText = 'Medium';
                passwordColor = '#ffdb00';
                break;
            }
            case 4: {
                passwordStrengthText = 'Strong';
                passwordColor = '#95c730';
                break;
            }
            case 5: {
                passwordStrengthText = 'Very Strong';
                passwordColor = '#009821';
                break;
            }
        }

        let blocks = [];

        for(let j = 0; j < 5; j++) {

            let color = false;

            if(j < passwordStrength) {
                color = passwordColor;
            }

            let block = {};
            if(color) {
                block.style = {
                    backgroundColor: color
                };
            }
            else {
                block.style = {};
            }

            blocks.push(block);
        }

        const errorStyle = {
            paddingLeft: this.labelWidth
        }

        const meterStyle = {
            width: this.controlWidth
        }

        const textStyle = {
            color: passwordColor
        }

        return (
            <div className="control-core-error" style={errorStyle}>
                { this.state.meter && this.showMeter && (
                    <div className="control-core-password-strength-container">
                        <div className="control-core-password-strength-meter" style={meterStyle}>
                            {blocks.map(function(block, i){
                                return (<div key={i} className="control-core-password-strength-meter-block" style={block.style} ></div>)
                            }, this)}
                        </div>
                        <div className="control-core-password-strength-text" style={textStyle}>{passwordStrengthText}</div>
                        { this.state.focused && passwordStrength < 5 && (
                            <div className="control-core-password-popup">
                                Password must contain:
                                {!passwordTracker.eightCharsOrGreater && 'At least 8 characters. '}
                                {!passwordTracker.lowercase && 'A lower case letter. '}
                                {!passwordTracker.uppercase && ('A upper case letter. ')}
                                {!passwordTracker.number && 'A number. '}
                                {!passwordTracker.specialChar && 'A Special character.'}
                            </div>
                        )}
                    </div>
                )}
                {!this.showMeter &&
                    <div>
                    {this.state.error}
                    </div>
                }
            </div>
        );



    }

}

export default Control_Password;
