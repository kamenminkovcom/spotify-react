import Service from './service';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/artists';

class ArtistService {

    static getArtistAlbums(id) {
        const url = `${baseUrl}/${id}/albums`;
        const token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res => res.data.items)
            .catch(err => console.log(err));
    }
}

export default ArtistService;