import Service from './service';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/albums';

class AlbumService {

    static getAlbumDetails(id) {
        let url = baseUrl + `/${id}`;
        let token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res => res.data);
    }

    static getNewReleases() {
        const url = 'https://api.spotify.com/v1/browse/new-releases';
        let token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res => res.data.albums.items);
    }
}

export default AlbumService;