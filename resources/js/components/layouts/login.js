import React from 'react';
import ReactDOM from 'react-dom';
import Menu_Main from "../menu/main";

function Layouts_Login() {
    return (
        <div className="container-fluid h-100 login-screen">
            <Menu_Main/>
        </div>
    );
}

export default Layouts_Login;

if (document.getElementById('layouts_login')) {
    ReactDOM.render(<Layouts_Login />, document.getElementById('layouts_login'));
}
