import React from 'react';
import axios from 'axios';
import LoginUtils from '../../utils/loginUtils';
import login from './login.css';

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className='login-page'>
                <button className="login-button" onClick={LoginUtils.handleSpotifyConnect}>Login</button>
            </div>
        )
    }
}

export default Login;