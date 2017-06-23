import axios from 'axios';
import Utils from '../utils/utils';

const baseURL = 'https://api.spotify.com/v1/users';

class UserService {
    static getPlaylists(userId) {
        let url = `${baseURL}/${userId}/playlists`;
        let token = Utils.getAccessToken();
        return  axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.data.items);  
    }
}

export default UserService;