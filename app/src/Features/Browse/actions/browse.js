import actionTypes from '../../../actions/actionTypes';
import PlaylistService from '../../../services/playlistService';
import GenresService from '../../../services/genresService';
import AlbumService from '../../../services/albumService';
import CoverArtModel from '../../../utils/Models/CoverArtModel';
import Utils from '../../../utils/utils';
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
        PlaylistService.getFeaturedPlaylists()
            .then(res => {
                const featured = Utils.parsePlaylists(res);
                dispatch(loadFeatured(featured));
            })
            .catch(err => console.log(err));
    };
}


export function getGenres() {
    return dispatch => {
        GenresService.getAll()
            .then(res => {
                let genres = res.map(g => {
                    let imageUrl = g.icons[0].url;
                    let detailsNavigation = `/view/${g.id}`;
                    return new CoverArtModel(g.name, null, imageUrl, g.id, detailsNavigation);
                });
                dispatch(loadGenres(genres));
            })
            .catch(err => console.log(err));
    };
}

export function getNewReleases() {
    return dispatch => {
        AlbumService.getNewReleases()
            .then(res => {
                const newReleases = Utils.parseAlbums(res);
                dispatch(loadNewReleases(newReleases));
            })
            .catch(err => console.log(err));
    };
}