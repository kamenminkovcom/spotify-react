import axios from 'axios';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/users';

class PlaylistService {

    static getPlaylistDeatils(playlistId) {
        let username = Utils.getCurrentUserId();
        let url = baseUrl + `/${username}/playlists/${playlistId}`;
        let token = Utils.getAccessToken();
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.data);
    }
}

export default PlaylistService;