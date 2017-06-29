import actionTypes from '../../../../actions/actionTypes';
import PlaylistService from '../../../../services/playlistService';
import CoverArtModel from '../../../../utils/Models/CoverArtModel';
import constants from '../../../../utils/constants';

const defaultCoverUrl = constants.defaultPictureUrl;

export const loadDetailsPlaylists = playlists => ({
    type: actionTypes.LOAD_VIEW_PLAYLISTS,
    playlists
});

export function getPlaylists(categoryId) {
    return dispatch => {
        PlaylistService.getGenrePlaylist(categoryId)
            .then(res => {
                let playlists = res.map(p => {
                    let imageUrl = p.images.length === 0 ? defaultCoverUrl : p.images[0].url;
                    let owner = {
                        name: p.owner.id
                        , detailsNavigation: `/user/${p.owner.id}`
                    };
                    let detailsNavigation = `/user/${p.owner.id}/playlist/${p.id}`;
                    return new CoverArtModel(p.name, [owner], imageUrl, p.id, detailsNavigation);
                });
                dispatch(loadDetailsPlaylists(playlists));
            })
            .catch(err => console.log(err));
    }
}
