import CoverArtModel from './Models/CoverArtModel';
import ArtistModel from './Models/ArtistModel';
import constants from './constants';

const defaultCoverUrl = constants.defaultPictureUrl;
const defaultArtistAvatar = constants.defaultArtistAvatar;

class Utils {

    static getCurrentUserId() {
        return localStorage.getItem('userId');
    } 

    static getAccessToken() {
        return localStorage.getItem('spotifyToken');
    }

    static millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    static parsePlaylists(res) {
        return res.playlists.items.map(a => {
            let imageUrl = a.images.length === 0 ? defaultCoverUrl : a.images[0].url;
            let owner = {
                name: a.owner.id,
                detailsNavigation: `/user/${a.owner.id}`
            };
            let owners = [owner];
            let detailsNavigation = `/user/${a.owner.id}/playlist/${a.id}`;
            return new CoverArtModel(a.name, owners, imageUrl, a.id, detailsNavigation);
        });
    }

    static parseAlbums(res) {
        return res.albums.items.map(a => {
            let imageUrl = a.images.length === 0 ? '' : a.images[0].url;
            let navigationPath = `/album/${a.id}`;
            let artists = a.artists.map(x => ({
                name: x.name,
                detailsNavigation: `/artist/${x.id}`
            }));
            return new CoverArtModel(a.name, artists, imageUrl, a.id, navigationPath);
        });
    }

    static  parseArtists(res) {
        return res.artists.items.map(a => {
            let imageUrl = a.images.length === 0 ? defaultArtistAvatar : a.images[0].url;
            let detailsNavigation = `/artist/${a.id}`;
            return new ArtistModel(a.id, a.name, imageUrl, detailsNavigation, a.genres);
        });
    }

    static parseTracks(res) {
        return res.tracks.items.map(t => {
            return {name: t.name, duration_ms: t.duration_ms}
        })
    }

    static debounce (func, delay) {
        let timer = null;

        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        };
    }
 }

export default Utils;
