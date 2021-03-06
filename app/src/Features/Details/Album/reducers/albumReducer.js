import actionTypes from '../../../../actions/actionTypes';
import initialState from '../../../../store/initialState';

const albumReducer = (state = initialState.album, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALBUM:
            return action.album;
        case actionTypes.CLEAR_ALBUM:
            return initialState.album;
        default:
            return state;
    }
};

export default albumReducer;