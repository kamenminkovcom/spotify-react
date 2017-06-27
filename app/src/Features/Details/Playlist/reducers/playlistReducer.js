import actionTypes from '../../../../actions/actionTypes';
import initialState from '../../../../store/initialState';

const playlistReducer = (state = initialState.playlist, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PLAYLIST:
            return action.playlist;
        default:
            return state
    }
};

export default playlistReducer;