import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../../components/common/Heading/Heading';
import userProfile from './userProfile.css';


const UserDetails = ({imageUrl, username}) => (
    <div className="user-details">
        <div className="profile-picture-container">
            <img className="profile-picture" src={imageUrl} alt=""/>
        </div>
        <Heading text={username}/>
    </div>
);

UserDetails.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default UserDetails;