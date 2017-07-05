import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const RecentSearch = ({navigation, content, clickHandler}) => {
    return (
        <div className="recent-search">
            <h1 onClick={clickHandler} value={content}>{content}</h1>
        </div>
    )
};

RecentSearch.propTypes = {
    content: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};

export default RecentSearch;