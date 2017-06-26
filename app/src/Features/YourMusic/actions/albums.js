import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import AlbumModel from '../../../utils/Models/AlbumModel';

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
                    let album = new AlbumModel(a.album.name, a.album.artists,a.album.images);
                    albums.push(album);
                });
                dispatch(loadAlbums(albums));
            })
            .catch(err => console.log(err));
    }
}