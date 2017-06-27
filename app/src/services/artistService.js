import axios from 'axios';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/artists';

class ArtistService {

    static getArtistAlbums(id) {
        const url = `${baseUrl}/${id}/albums`;
        const token = Utils.getAccessToken();
        axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.data)
            .catch(err => console.log(err));
    }
}

export default ArtistService;