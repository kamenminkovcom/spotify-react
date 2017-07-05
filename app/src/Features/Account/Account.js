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
               <div className="logout-btn">
                   <Link to={'/login'} onClick={this.logout} className="logout-link">Logout</Link>
               </div>
           </div>
       )
    }
}

export default Account;