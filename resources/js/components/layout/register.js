import React, {Component} from 'react';
import Register_Image from '../../../../public/images/register_image.png';
import Form_Register from "../form/register";

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

        const register_style = {
            width: '100%',
            height: '100%'
        }

        const register_image_container_style = {
            width: '450px',
            height: '100%',
            display: 'inline-block'
        };

        const register_image_style = {
            width: '450px',
        };

        const register_form_container_style = {
            width: 'calc(100% - 450px)',
            height: '100%',
            display: 'inline-block',
            verticalAlign: 'top'
        };

        return (
            <div style={register_style}>
                <div style={register_image_container_style}>
                    <img src={Register_Image} style={register_image_style} />
                </div>
                <div className="card-body" style={register_form_container_style}>
                    <Form_Register id="form-register" />
                </div>
            </div>
        );
    }

}

export default Layout_Register;
