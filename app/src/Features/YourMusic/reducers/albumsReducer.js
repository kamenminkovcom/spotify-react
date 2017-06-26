import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';

const albumsReducer = (state = initialState.albums, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALBUMS:
            return [...action.albums];

        default:
            return state;
    }
};

export default albumsReducer;