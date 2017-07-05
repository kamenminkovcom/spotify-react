import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

let LocalNavbar = ({roles, componentType, clickHandler}) => {
    return(
        <ul className="local-navbar">
            {roles.map(r =>  {
                let urlSegment = r.split(/\s+/).join('');
                return <li key={r}><Link to={`/${componentType}/${urlSegment}`} onClick={clickHandler}>{r}</Link></li>
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
