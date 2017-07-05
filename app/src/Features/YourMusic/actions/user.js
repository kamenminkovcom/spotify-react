import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import CoverArtModel from '../../../utils/Models/CoverArtModel';
import Utils from '../../../utils/utils';
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultPictureUrl;

export const loadAlbums = albums => ({
    type: actionTypes.LOAD_USER_ALBUMS,
    albums
});

export const loadFollowArtists = followArtists => ({
    type: actionTypes.LOAD_USER_FOLLOW_ARTISTS,
    followArtists
});
export const loadPlaylists = playlists => ({
    type: actionTypes.LOAD_USER_PLAYLISTS,
    playlists
});


export function getUserSavedAlbums() {
    return dispatch => {
        UserService.getSavedAlbums()
            .then(res => {
                let albums = res.map(a => {
                    let imageUrl = a.album.images.length === 0 ? '' : a.album.images[0].url;
                    let navigationPath = `/album/${a.album.id}`;
                    let artists = a.album.artists.map(x => ({
                        name: x.name,
                        detailsNavigation: `/artist/${x.id}`
                    }));
                    return new CoverArtModel(a.album.name, artists, imageUrl, a.album.id, navigationPath);
                });
                dispatch(loadAlbums(albums));
            })
            .catch(err => console.log(err));
    }
}

export function getFollowArtists() {
    return dispatch => {
        UserService.getFollowedArtists()
            .then(res => {
                let artists = Utils.parseArtists(res);
                dispatch(loadFollowArtists(artists));
            })
            .catch(err => console.log(err));
    }
}

export function getPlaylists() {
    return (dispatch) => {
        UserService.getPlaylists(Utils.getCurrentUserId())
            .then(res => {
                let playlists = res.map(a => {
                    let imageUrl = a.images.length === 0 ? defaultCoverUrl : a.images[0].url;
                    let owner = {name: a.owner.id,
                        detailsNavigation:`/user/${a.owner.id}`};
                    let owners = [owner];
                    let detailsNavigation = `/user/${a.owner.id}/playlist/${a.id}`;
                    return new CoverArtModel(a.name, owners, imageUrl, a.id, detailsNavigation);
                });
                dispatch(loadPlaylists(playlists));
            })
            .catch(err => console.log(err));
    }
}