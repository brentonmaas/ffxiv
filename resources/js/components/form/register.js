import React, {Component} from 'react';
import Form_Basic from "./basic";
import Form_Control_Basic from "./control/basic";
import Form_Control_Password from "./control/password";
import Form_Control_Checkbox from "./control/checkbox";

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
                <Form_Control_Basic id={this.state.id+"-username"} label="Username" required={true} />
                <Form_Control_Password id={this.state.id+"-password"} label="Password" required={true} />
                <Form_Control_Password id={this.state.id+"-confirm-password"} label="Confirm Password" required={true} />
                <Form_Control_Basic id={this.state.id+"-email"} label="Email" required={true} />
                <Form_Control_Checkbox id={this.state.id+"-can-email"} description_width="calc(100% - 23px)" hide_label={true} description=" I agree to receive emails from Magitek Terminal about new features, new products and newsletters. You can opt out at any time using the link provided within our emails." />
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }

}

export default Form_Register;
