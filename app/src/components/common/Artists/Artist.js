import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

let Artist = (props) => {
    return(
        <div className='artist-default'>
            <Link to={props.detailsNavigation}>
                <div>
                    <img className="artist-image" src={props.imageUrl} alt="" />
                </div>
            </Link>
            <Link to={props.detailsNavigation} className="name-link">
                {props.name}
            </Link>
        </div>
    )
};

Artist.propTypes = {
    detailsNavigation: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Artist;