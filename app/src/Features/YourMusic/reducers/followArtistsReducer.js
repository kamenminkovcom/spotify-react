import actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';

const followArtistsReducer = (state = initialState.followArtists, action) => {
    switch (action.type) {
        case actionTypes.LOAD_FOLLOW_ARTISTS:
            return [...action.followArtists];

        default:
            return state;
    }
};

export default followArtistsReducer;