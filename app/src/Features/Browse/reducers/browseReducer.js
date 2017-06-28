import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const browseReducer = (state = initialState.browse, action) => {
    switch (action.type) {
        case actionTypes.LOAD_BROWSE_FEATURED:
            return update(state, {featured: {$set: action.featured}});
        case actionTypes.LOAD_BROWSE_GENRES:
            return update(state, {genres: {$set: action.genres}});
        case actionTypes.LOAD_BROWSE_NEW_RELEASES:
            return update(state, {newReleases: {$set: action.newReleases}});
        default:
            return state;
    }
};

export default browseReducer;