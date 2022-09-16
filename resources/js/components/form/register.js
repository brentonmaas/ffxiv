import React, {Component} from 'react';
import Form_Basic from "./basic";
import Form_Control_Basic from "./control/basic";
import Form_Control_Password from "./control/password";

class Form_Register extends Form_Basic {

    render() {
        const text_style = {
            color: '#fff',
            textAlign: 'center',
            fontSize: '18px'
        }
        const spacer_style = {
            height: '1px',
            width: 'calc(100% - 60%)',
            backgroundImage: 'linear-gradient(to right, #3856b9, #2173ce, #3856b9)',
            marginTop: '6px',
            marginBottom: '3px',
            position: 'relative',
            left: '30%'
        }

        return (
            <form id={this.state.id} onSubmit={this.handleSubmit}>
                <div style={text_style}>
                    Use our character builder to manage your spells, hit
                    <div style={spacer_style}></div>
                    points, and gear. Fully customizable digital character
                    <div style={spacer_style}></div>
                    sheet. Build your encounters and track turns with our
                    <div style={spacer_style}></div>
                    Magitek Terminal DM tool. Combined Dungeons &
                    <div style={spacer_style}></div>
                    Dragons & Final Fantasy XIV digital content
                </div>
                <div className="form-padding-row"></div>
                <Form_Control_Basic id={this.state.id+"-username"} label="Username" />
                <Form_Control_Password id={this.state.id+"-password"} label="Password" />
                <Form_Control_Password id={this.state.id+"-confirm-password"} label="Confirm Password" />
                <Form_Control_Basic id={this.state.id+"-email"} label="Email" />
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default Form_Register;
