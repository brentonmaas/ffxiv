import React from 'react';
import ReactDOM from 'react-dom';
import Menu_Main from "../menu/main";
import Container_Window from "../container/window";
import Form_Register from "../form/register";
import Layout_Register from "../layout/register";

function Page_Login() {

    return (
        <div className="container-fluid h-100 login-screen">
            <Menu_Main/>
            <Container_Window id="registration-window" name="Registration Window" height="538px" width="900px" nopadding={true} onclose={showMainMenu} body={<Layout_Register />} />
        </div>
    );
}

export default Page_Login;

if (document.getElementById('page_login')) {
    ReactDOM.render(<Page_Login />, document.getElementById('page_login'));
}
