import actionTypes from '../../../../actions/actionTypes';
import initialState from '../../../../store/initialState';
import update from 'immutability-helper';

const viewReducer = (state = initialState.view, action) => {
    switch (action.type) {
        case actionTypes.LOAD_VIEW_PLAYLISTS:
            return update(state, {playlists: {$set: action.playlists}});
        default:
            return state;
    }
};

export default viewReducer;