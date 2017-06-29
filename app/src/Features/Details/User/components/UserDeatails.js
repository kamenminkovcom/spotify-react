import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../../components/common/Heading/Heading';


const UserDetails = ({imageUrl, username}) => (
        <div className="user-details">
            <img src={imageUrl} alt=""/>
            <Heading text={username}/>
        </div>
);

UserDetails.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};