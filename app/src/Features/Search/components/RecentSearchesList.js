import React from 'react';
import PropTypes from 'prop-types';
import RecentSearch from './RecentSearch';
import recentSearches from './recentSearches.css';

const RecentSearchesList = ({searches, clickHandler}) => {
    return(
            <div className="recent-searches=container">
                <h4 className="recent-searches-header">Recent Searches</h4>
                {searches.map((s, index) => <RecentSearch content={s.content} key={s.content + index} clickHandler={clickHandler}/>)}
            </div>
    )
};

RecentSearchesList.propTypes = {
    searches: PropTypes.array.isRequired
};

export default RecentSearchesList;