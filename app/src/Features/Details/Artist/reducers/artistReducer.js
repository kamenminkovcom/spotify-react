import actionTypes from '../../../../actions/actionTypes';
import initialState from '../../../../store/initialState';
import update from 'immutability-helper';

const artistReducer = (state = initialState.artist, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ARTIST_ALBUMS:
            return update(state, {albums: {$set: action.albums}});
        case actionTypes.CLEAR_ARTIST:
            return initialState.artist;
        default:
            return state;
    }
};

export default artistReducer;