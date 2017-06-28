import actionTypes from '../../../../actions/actionTypes';
import PlaylistService from '../../../../services/playlistService';
import PlaylistDetailsModel from '../../../../utils/Models/PlaylistDeatilsModel';


export const loadPlaylist = playlist => ({
    type: actionTypes.LOAD_PLAYLIST,
    playlist
});


export function getPlaylist(id, username) {
    return dispatch => {
        PlaylistService.getPlaylistDeatils(id, username)
            .then(res => {
                let tracks = res.tracks.items.map(x => x.track);
                let playlist = new PlaylistDetailsModel(res.id, res.name, res.images,tracks, res.owner);
                dispatch(loadPlaylist(playlist));
            })
            .catch(err => console.log(err));
    }
}