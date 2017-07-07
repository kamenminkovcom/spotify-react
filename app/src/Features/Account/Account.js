import React from 'react';
import {Link} from 'react-router-dom';
import account from './account.css';


class Account extends React.Component {

    constructor(props) {
        super(props);
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem('userId');
    }

    render() {
        return (
            <div className="account-page">
                <img className="account-image" src="http://webmii.com/images/user%20white.png" alt=""/>
                <Link to={'/login'} onClick={this.logout} className="logout-link">Log out</Link>
            </div>
        )
    }
}

export default Account;