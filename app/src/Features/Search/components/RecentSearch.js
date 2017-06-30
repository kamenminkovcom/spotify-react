import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const RecentSearch = ({navigation, content}) => {
    return (
        <div className="recent-search">
            <Link to={navigation}>{content}</Link>
        </div>
    )
};

RecentSearch.propTypes = {
    navigation: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default RecentSearch;