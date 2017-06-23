import actionTypes from './actionTypes';
import UserService from '../services/userService';
import Utils from '../utils/utils';
import AlbumModel from '../utils/Models/albumModel';


export const loadAlbums = albums => ({
    type: actionTypes.LOAD_ALBUMS,
    albums
})

export function getAlbums() {
    let albums = [];
    return (dispatch) => {
        UserService.getPlaylists(Utils.getCurrentUserId())
        .then(res => {
            res.map(a => {
                let album = new AlbumModel(a.name, a.owner.id);
                albums.push(album);
            })
            dispatch(loadAlbums(albums));
        })
        .catch(err => console.log(err));
    }
}