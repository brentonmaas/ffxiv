import React, {Component} from 'react';
import Form_Control_Basic from "./basic";

class Form_Control_Password extends Form_Control_Basic {

    render() {
        return (
            <label className="form-control-basic">
                <div className="form-control-label">{this.state.label+':'}</div>
                <input type="password" name={this.state.id} id={this.state.id} className="form-control-input" defaultValue={this.state.value} />
                <div className="form-control-additional">{this.state.additional}</div>

                <div className="form-padding-row"></div>
            </label>
        );
    }

}

export default Form_Control_Password;
