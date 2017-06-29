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
        PlaylistService.getFeaturedPlaylists()
            .then(res => {
                let featured = res.map(p => {
                    let imageUrl = p.images.length === 0 ? defaultCoverUrl : p.images[0].url;
                    let detailsNavigation = `/user/${p.owner.id}/playlist/${p.id}`;
                    return new CoverArtModel(p.name, null, imageUrl, p.id, detailsNavigation);
                });
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
                let newReleases = res.map(a => {
                    let imageUrl = a.images.length === 0 ? defaultCoverUrl : a.images[0].url;
                    let detailsNavigation = `/album/${a.id}`;
                    let artists = a.artists.map(x => ({
                        name: x.name,
                        detailsNavigation: `/artist/${x.id}`
                    }));
                    return new CoverArtModel(a.name, artists, imageUrl, a.id, detailsNavigation);
                });
                dispatch(loadNewReleases(newReleases));
            })
            .catch(err => console.log(err));
    };
}