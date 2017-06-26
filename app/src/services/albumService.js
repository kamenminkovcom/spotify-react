import axios from 'axios';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/albums';

class AlbumService {

    static getAlbumDetails(id) {
        let url = baseUrl + `/${id}`;
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

export default AlbumService;