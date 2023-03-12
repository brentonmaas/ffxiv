import React, {Component} from 'react';
import Register_Image from '../../../../public/images/register_image.png';
import Form_Register from "../form/register";
import '../../../css/layout/register.css';

class Layout_Register extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        for(let index in props)
        {
            this.state[index] = props[index];
        }
    }

    render() {

        return (
            <div className="layout-register">
                <div className="layout-register-image-container">
                    <img src={Register_Image} className="layout-register-image" />
                </div>
                <div className="layout-register-form-container">
                    <Form_Register id="form-register" />
                </div>
            </div>
        );
    }

}

export default Layout_Register;
