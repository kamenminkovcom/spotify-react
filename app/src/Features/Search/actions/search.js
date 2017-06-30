import actionTypes from '../../../actions/actionTypes';


export const addRecentSearch = search => ({
    type: actionTypes.ADD_RECENT_SEARCH,
    search
});

export function addSearch(search) {
    return dispatch => {
        dispatch(addRecentSearch(search));
    }
}