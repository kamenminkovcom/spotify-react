import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import CoverArtModel from '../../../utils/Models/CoverArtModel';

export const loadAlbums = albums => ({
    type: actionTypes.LOAD_ALBUMS,
    albums
});

export function getUserSavedAlbums() {
    let albums = [];
    return dispatch => {
        UserService.getSavedAlbums()
            .then(res => {
                res.map(a => {
                    let imageUrl = a.album.images.length === 0 ? '' : a.album.images[0].url;
                    let navigationPath = `/album/${a.album.id}`;
                    let album = new CoverArtModel(a.album.name, a.album.artists,imageUrl, a.album.id, navigationPath);
                    albums.push(album);
                });
                dispatch(loadAlbums(albums));
            })
            .catch(err => console.log(err));
    }
}