import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import navbar from '../navbar.css';


let NavListItem = (props) => {
    return(
        <Link to={props.navigation} className="link-item">{props.role}</Link>
    )
}

export default NavListItem;