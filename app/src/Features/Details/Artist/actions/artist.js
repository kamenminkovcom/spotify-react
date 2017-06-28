import actionTypes from '../../../../actions/actionTypes';
import CoverArtModel from '../../../../utils/Models/CoverArtModel';
import ArtistService from '../../../../services/artistService';

export const loadArtistAlbums = albums => ({
    type: actionTypes.LOAD_ARTIST_ALBUMS,
    albums
});

export function getArtistAlbums(id) {
    let albums = []
    return dispatch => {
        ArtistService.getArtistAlbums(id)
                    .then(res => {
                        res.map(a => {
                            let imageUrl = a.images.length === 0 ? '' : a.images[0].url;
                            let navigationPath = `/album/${a.id}`;
                            let album = new CoverArtModel(a.name, a.artists,imageUrl, a.id, navigationPath);
                            if (!albums.some(x => x.name === album.name)) {
                                albums.push(album);
                            }
                        });
                        dispatch(loadArtistAlbums(albums));
                    })
                     .catch(err => console.log(err));
    }
}



