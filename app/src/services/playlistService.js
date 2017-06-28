import Service from './service';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/users';

class PlaylistService {

    static getPlaylistDeatils(playlistId, username) {
        let url = baseUrl + `/${username}/playlists/${playlistId}`;
        let token = Utils.getAccessToken();
        return Service.getRequest(url,token)
            .then(res => res.data);
    }

    static getFeaturedPlaylists() {
        const url = 'https://api.spotify.com/v1/browse/featured-playlists';
        let token = Utils.getAccessToken();
        return Service.getRequest(url,token)
            .then(res => res.data.playlists.items);
    }

    static getGenrePlaylist(categoryId) {
        const url = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`;
        let token = Utils.getAccessToken();
        return Service.getRequest(url, token)
            .then(res=>res.data.playlists.items);
    }
}

export default PlaylistService;