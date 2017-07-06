import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import navbar from '../navbar.css';


let NavListItem = ({navigation, role, active}) => {
    let endPoint = navigation.split('/')[1];
    return(
        <Link to={navigation} className={active === endPoint ? 'link-item active-navbar' : 'link-item'} >{role}</Link>
    )
};

NavListItem.propTypes = {
    navigation: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    active: PropTypes.string
};

export default NavListItem;