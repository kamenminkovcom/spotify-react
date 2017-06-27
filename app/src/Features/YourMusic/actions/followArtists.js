import actionTypes from '../../../actions/actionTypes';
import UserService from '../../../services/userService';
import ArtistModel from '../../../utils/Models/ArtistModel';

export const loadFollowArtists = followArtists => ({
    type: actionTypes.LOAD_FOLLOW_ARTISTS,
    followArtists
});

export function getFollowArtists() {
    let artists = [];

    return dispatch => {
        UserService.getFollowedArtists()
            .then(res => {
                res.map(a => {
                    let imageUrl = a.images[0].url;
                    let detailsNavigation = `/artist/${a.id}`;
                    let artist = new ArtistModel(a.id, a.name, imageUrl, detailsNavigation, a.genres);
                    artists.push(artist);
                });
                dispatch(loadFollowArtists(artists));
            })
            .catch(err => console.log(err));
    }
}