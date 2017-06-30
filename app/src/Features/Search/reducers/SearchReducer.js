import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const searchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECENT_SEARCH:
          let recentSearches = new Map(state.recentSearches);
          recentSearches.set(action.search.content, action.search);
          return update(state, {recentSearches: {$set: recentSearches }});
        default:
            return state;
    }
};

export default searchReducer;