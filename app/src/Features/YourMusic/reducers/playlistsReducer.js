import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';

const playlistsReducer = (state = initialState.playlists, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PLAYLISTS:    
            return [...action.playlists];
    
        default:
            return state;
    }
};

export default playlistsReducer;