import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import localNavbar from './localNavbar.css';

let LocalNavbar = ({roles, componentType, clickHandler, active}) => {
    return(
        <ul className="local-navbar">
            {roles.map((r, i) =>  {
                let urlSegment = r.split(/\s+/).join('');
                return <li className={active == urlSegment ? 'active' : 'passive'} key={i}><Link to={`/${componentType}/${urlSegment}`} onClick={clickHandler} value={r}>{r}</Link></li>
            })}
        </ul>
    )
};

LocalNavbar.propTypes = {
    roles: PropTypes.array.isRequired,
    componentType: PropTypes.string.isRequired,
    clickHandler: PropTypes.all
};

export default LocalNavbar;
