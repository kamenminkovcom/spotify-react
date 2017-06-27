import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import Utils from '../../../utils/utils';
import CoverArtModel from '../../../utils/Models/CoverArtModel';
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultPictureUrl;

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
                let imageUrl = a.images.length === 0 ? defaultCoverUrl : a.images[0].url;
                let owner = {name: a.owner.id};
                let owners = [owner];
                let detailsNavigation = `/user/${a.owner.id}/playlist/${a.id}`;
                let playlist = new CoverArtModel(a.name, owners, imageUrl, a.id, detailsNavigation);
                playlists.push(playlist);
            })
            dispatch(loadPlaylists(playlists));
        })
        .catch(err => console.log(err));
    }
}