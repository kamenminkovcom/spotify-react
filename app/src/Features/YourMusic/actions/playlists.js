import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import Utils from '../../../utils/utils';
import PlaylistModel from '../../../utils/Models/PlaylistModel';


export const loadPlaylists = playlists => ({
    type: actionTypes.LOAD_PLAYLISTS,
    playlists
})

export function getPlaylists() {
    let playlists = [];
    return (dispatch) => {
        UserService.getPlaylists(Utils.getCurrentUserId())
        .then(res => {
            res.map(a => {
                let playlist = new PlaylistModel(a.name, a.owner.id, a.images);
                playlists.push(playlist);
            })
            dispatch(loadPlaylists(playlists));
        })
        .catch(err => console.log(err));
    }
}

