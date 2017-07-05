import actionTypes from '../../../../actions/actionTypes';
import initialState from '../../../../store/initialState';

const playlistReducer = (state = initialState.playlist, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PLAYLIST:
            return action.playlist;
        case actionTypes.CLEAR_PLAYLIST:
            return initialState.playlist;
        default:
            return state
    }
};

export default playlistReducer;