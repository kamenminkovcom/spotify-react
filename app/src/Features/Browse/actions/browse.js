import actionTypes from '../../../actions/actionTypes';
import PlaylistService from '../../../services/playlistService';
import GenresService from '../../../services/genresService';
import AlbumService from '../../../services/albumService';
import CoverArtModel from '../../../utils/Models/CoverArtModel';
import constants from '../../../utils/constants';

const defaultCoverUrl = constants.defaultPictureUrl;

export const loadFeatured = featured => ({
    type: actionTypes.LOAD_BROWSE_FEATURED,
    featured
});

export const loadGenres = genres => ({
    type: actionTypes.LOAD_BROWSE_GENRES,
    genres
});

export const loadNewReleases = newReleases => ({
    type: actionTypes.LOAD_BROWSE_NEW_RELEASES,
    newReleases
});


export function getFeaturedPlaylists() {
    return dispatch => {
        let featured = [];
        PlaylistService.getFeaturedPlaylists()
            .then(res => {
                res.map(p => {
                    let imageUrl = p.images.length === 0 ? defaultCoverUrl : p.images[0].url;
                    let detailsNavigation = `/user/${p.owner.id}/playlist/${p.id}`;
                    let playlist = new CoverArtModel(p.name, null, imageUrl, p.id, detailsNavigation);
                    featured.push(playlist);
                });
                dispatch(loadFeatured(featured));
            })
            .catch(err => console.log(err));
    };
}


export function getGenres() {
    return dispatch => {
        let genres = [];
        GenresService.getAll()
            .then(res => {
                res.map(g => {
                    let imageUrl = g.icons[0].url;
                    let detailsNavigation = `/view/${g.id}`;
                    let genre = new CoverArtModel(g.name, null, imageUrl, g.id, detailsNavigation);
                    genres.push(genre);
                });
                dispatch(loadGenres(genres));
            })
            .catch(err => console.log(err));
    };
}

export function getNewReleases() {
    return dispatch => {
        let newReleases = [];
        AlbumService.getNewReleases()
            .then(res => {
                res.map(a => {
                    let imageUrl = a.images.length === 0 ? defaultCoverUrl : a.images[0].url;
                    let detailsNavigation = `/album/${a.id}`;
                    let album = new CoverArtModel(a.name, a.artists, imageUrl, a.id, detailsNavigation);
                    newReleases.push(album);
                });
                dispatch(loadNewReleases(newReleases));
            })
            .catch(err => console.log(err));
    };
}