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
                onFocus={() => this.setState({ meter: true})}
                onChange={this.handleChange.bind(this)}
                style={control_style}
                defaultValue={this.value} />
        );
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

        const errorStyle = {
            paddingLeft: this.labelWidth
        }

        let meterStyle = {
            width: this.controlWidth
        }

        return (
            <div className="control-core-error" style={errorStyle}>
                { this.state.meter && (
                    <div>
                        <div className="control-core-password-strength-meter" style={meterStyle}>
                            <div className="control-core-password-strength-meter-block"></div>
                            <div className="control-core-password-strength-meter-separator"></div>

                            <div className="control-core-password-strength-meter-block"></div>
                            <div className="control-core-password-strength-meter-separator"></div>

                            <div className="control-core-password-strength-meter-block"></div>
                            <div className="control-core-password-strength-meter-separator"></div>

                            <div className="control-core-password-strength-meter-block"></div>
                            <div className="control-core-password-strength-meter-separator"></div>

                            <div className="control-core-password-strength-meter-block"></div>
                        </div>

                    </div>
                )}

            </div>
        );

        /**
         * <div>
         *                             {passwordStrength < 5 && 'Must contain '}
         *                             {!passwordTracker.uppercase && 'uppercase, '}
         *                             {!passwordTracker.lowercase && 'lowercase, '}
         *                             {!passwordTracker.specialChar && 'special character, '}
         *                             {!passwordTracker.number && 'number, '}
         *                             {!passwordTracker.eightCharsOrGreater &&
         *                                 'eight characters or more'}
         *                         </div>
         */
    }

}

export default Control_Password;
