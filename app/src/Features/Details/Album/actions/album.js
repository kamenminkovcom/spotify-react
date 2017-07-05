import actionTypes from '../../../../actions/actionTypes';
import AlbumService from '../../../../services/albumService';
import AlbumDetailsModel from '../../../../utils/Models/AlbumDetailsModel';

export const loadAlbum = album => ({
    type: actionTypes.LOAD_ALBUM,
    album
});

export const clearAlbum = () => ({
   type: actionTypes.CLEAR_ALBUM
});

export function getAlbum(id) {
    return dispatch => {

        AlbumService.getAlbumDetails(id)
            .then(res => {
                let artists = res.artists.map(x => ({
                    name: x.name,
                    detailsNavigation: `/artist/${x.id}`
                }));
                let album = new AlbumDetailsModel(res.id, res.name, artists, res.genres, res.images, res.tracks);
                dispatch(loadAlbum(album));
            })
            .catch(err => console.log(err));
    }
}