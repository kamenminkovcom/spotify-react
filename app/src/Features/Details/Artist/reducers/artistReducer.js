import actionTypes from '../../../../actions/actionTypes';
import initialState from '../../../../store/initialState';

const artistReducer = (state = initialState.artist, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ARTIST:
            return action.album;

        default:
            return state;
    }
};

export default artistReducer;