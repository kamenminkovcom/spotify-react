import actionTypes from '../../../../actions/actionTypes';
import UserService from '../../../../services/userService';
import CoverArtModel from '../../../../utils/Models/CoverArtModel';
import constants from '../../../../utils/constants';

const defaultCoverUrl = constants.defaultPictureUrl;

export const loadProfile = data => ({
    type: actionTypes.LOAD_USER_PROFILE,
    data
});

export function getUserProfileData(userId) {
    return dispatch => {
        UserService.getUserProfileData(userId)
            .then(([playlistData, userDetails]) => {
                    let playlists = playlistData.map(x => {
                        let imageUrl = x.images.length === 0 ? defaultCoverUrl : x.images[0].url;
                        let owner = {name: x.owner.id,
                            detailsNavigation:`/user/${x.owner.id}`};
                        let owners = [owner];
                        let detailsNavigation = `/user/${x.owner.id}/playlist/${x.id}`;
                        return new CoverArtModel(x.name, owners, imageUrl, x.id, detailsNavigation);
                    });
                    let username = userDetails.display_name ? userDetails.display_name : userDetails.id;
                    let imageUrl = userDetails.images.length > 0 ?  userDetails.images[0].url : defaultCoverUrl;
                    let data = {
                        playlists,
                        profileData: {username, imageUrl}
                    };
                    dispatch(loadProfile(data));
            })
    }
}