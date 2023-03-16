import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Page from '../../core/page';
import Menu_Main from "../menu/main";
import Window_Register from "../window/register";
import '../../../css/page/login.css';
import logo from '../../../../public/images/logo.png';

class Page_Login extends Page {

    constructor(props) {
        super(props);

        this.pageClass = 'login';

        for(let index in props)
        {
            this[index] = props[index];
        }

        window.components.page.login = this;
    }

    getContent() {

        const closeFunction = function() {
            window.components.menu.main.enableMenu();
        }

        return(
            <div>
                <img src={logo} className="page-login-logo" alt="logo" />
                <div className="page-login-heading">Magitek Terminal</div>
                <Menu_Main/>
                <Window_Register closeFunction={closeFunction}/>
            </div>
        );
    }
}

export default Page_Login;

if (document.getElementById('page')) {
    ReactDOM.render(<Page_Login />, document.getElementById('page'));
}
