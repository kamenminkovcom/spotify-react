import axios from 'axios';
import Utils from '../utils/utils';

const baseURL = 'https://api.spotify.com/v1/users';
const baseUserURL = 'https://api.spotify.com/v1/me';

class UserService {
    static getPlaylists(userId) {
        let url = `${baseURL}/${userId}/playlists`;
        let token = Utils.getAccessToken();
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.data.items)
            .catch(err => console.log(err));
    }

    static getSavedAlbums() {
        let url = `${baseUserURL}/albums`;
        let token = Utils.getAccessToken();
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.data.items)
            .catch(err => console.log(err));
    }

    static getFollowedArtists() {
        let url = `${baseUserURL}/following?type=artist`;
        let token = Utils.getAccessToken();
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.data.artists.items)
        .catch(err => console.log(err));
    }
}

export default UserService;