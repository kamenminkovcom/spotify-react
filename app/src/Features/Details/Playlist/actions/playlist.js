import actionTypes from '../../../../actions/actionTypes';
import PlaylistService from '../../../../services/playlistService';
import PlaylistDetailsModel from '../../../../utils/Models/PlaylistDeatilsModel';


export const loadPlaylist = playlist => ({
    type: actionTypes.LOAD_PLAYLIST,
    playlist
});


export function getPlaylist(id) {
    return dispatch => {
        PlaylistService.getPlaylistDeatils(id)
            .then(res => {
                let playlist = new PlaylistDetailsModel(res.id, res.name, res.images, res.tracks, res.owner);
                dispatch(loadPlaylist(playlist));
            })
            .catch(err => console.log(err));
    }
}