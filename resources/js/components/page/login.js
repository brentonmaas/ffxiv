import React from 'react';
import ReactDOM from 'react-dom';
import Menu_Main from "../menu/main";
import Container_Window from "../container/window";
import Form_Register from "../form/register";
import Layout_Register from "../layout/register";

function Page_Login() {

    const heading_style = {
        color: '#fff',
        fontFamily: 'Miedinger',
        position: 'absolute',
        top: '10px',
        left: '20px',
        fontSize: '24px'
    }

    return (
        <div className="container-fluid h-100 login-screen">
            <div style={heading_style}>Magitek Terminal</div>
            <Menu_Main/>
            <Container_Window id="registration-window" name="Registration Form" height="600px" width="1000px" nopadding={true} onclose={showMainMenu} body={<Layout_Register />} />
        </div>
    );
}

export default Page_Login;

if (document.getElementById('page_login')) {
    ReactDOM.render(<Page_Login />, document.getElementById('page_login'));
}
