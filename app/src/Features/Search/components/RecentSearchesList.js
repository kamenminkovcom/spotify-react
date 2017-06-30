import React from 'react';
import PropTypes from 'prop-types';
import RecentSearch from './RecentSearch';

const RecentSearchesList = ({searches}) => {
    return(
            <div>
                {searches.map((s, index) => <RecentSearch content={s.content} navigation={s.navigation} key={s.content + index}/>)}
            </div>
    )
};

RecentSearchesList.propTypes = {
    searches: PropTypes.array.isRequired
};

export default RecentSearchesList;