import Service from './service';
import Utils from '../utils/utils';
import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1/users';
const baseUserURL = 'https://api.spotify.com/v1/me';

class UserService {
    static getPlaylists(userId) {
        let url = `${baseURL}/${userId}/playlists`;
        let token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res => res.data.items)
            .catch(err => console.log(err));
    }

    static getSavedAlbums() {
        let url = `${baseUserURL}/albums`;
        let token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res => res.data.items)
            .catch(err => console.log(err));
    }

    static getFollowedArtists() {
        let url = `${baseUserURL}/following?type=artist`;
        let token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res => res.data)
            .catch(err => console.log(err));
    }

    static getUserProfileData(userId) {
        let playlistsUrl = `${baseURL}/${userId}/playlists`;
        let userProfileUrl = `https://api.spotify.com/v1/users/${userId}`;
        let token = Utils.getAccessToken();
        return axios
            .all([Service.getRequest(playlistsUrl, token), Service.getRequest(userProfileUrl, token)])
            .then(([playlists, profileData]) => (
                [playlists.data.items, profileData.data]
            ));

    }
}

export default UserService;