import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Owners from './Owners';

const CoverArt = (props) => {
    return (
        <div className='cover-art-default'>
            <Link to={props.detailsNavigation}>
                <div className="image-container">
                    <img className="cover-art-image" src={props.imageUrl} alt=""/>
                </div>
            </Link>
            <Link to={props.detailsNavigation} className="name-link">
                {props.name}
            </Link>
            {props.owners ? <Owners owners={props.owners}/> : null}
        </div>
    )
};

CoverArt.propTypes = {
    detailsNavigation: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    owners: PropTypes.array
};

export default CoverArt;