import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const searchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECENT_SEARCH:
          let recentSearches = new Map(state.recentSearches);
          recentSearches.set(action.search.content, action.search);
          return update(state, {recentSearches: {$set: recentSearches }});
        case actionTypes.CLEAR_SEARCH_RESULTS:
            return initialState.search;
        case actionTypes.SET_SEARCH_TERM:
            return update(state, {searchTerm: {$set: action.term}});
        case actionTypes.SET_SEARCH_TYPE:
            return update(state, {searchType: {$set: action.searchType}});
        case actionTypes.LOAD_SEARCH_ALBUMS:
            return update(state, {albums: {$set: action.albums}});
        case actionTypes.LOAD_SEARCH_PLAYLISTS:
            return update(state, {playlists: {$set: action.playlists}});
        case actionTypes.LOAD_SEARCH_ARTISTS:
            return update(state, {artists: {$set: action.artists}});
        case actionTypes.LOAD_SEARCH_TRACKS:
            return update(state, {tracks: {$set: action.tracks}});
        default:
            return state;
    }
};

export default searchReducer;