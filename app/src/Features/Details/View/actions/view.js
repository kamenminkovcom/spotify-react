import actionTypes from '../../../../actions/actionTypes';
import PlaylistService from '../../../../services/playlistService';
import Utils from '../../../../utils/utils';

export const loadDetailsPlaylists = playlists => ({
    type: actionTypes.LOAD_VIEW_PLAYLISTS,
    playlists
});

export function getPlaylists(categoryId) {
    return dispatch => {
        PlaylistService.getGenrePlaylist(categoryId)
            .then(res => {
                const playlists = Utils.parsePlaylists(res);
                dispatch(loadDetailsPlaylists(playlists));
            })
            .catch(err => console.log(err));
    }
}
