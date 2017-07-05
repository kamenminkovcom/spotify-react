import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';
import update from 'immutability-helper';

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case actionTypes.LOAD_USER_ALBUMS:
            return update(state, {albums: {$set: action.albums}});
        case actionTypes.LOAD_USER_PLAYLISTS:
            return update(state, {playlists: {$set: action.playlists}});
        case actionTypes.LOAD_USER_FOLLOW_ARTISTS:
            return update(state, {followArtists: {$set: action.followArtists}});
        case actionTypes.LOAD_USER_PROFILE:
            return update(state, {details: {$set: action.data}});
        case actionTypes.CLEAR_USER_PROFILE:
            return initialState.user;
        default:
            return state;
    }
};

export default userReducer;