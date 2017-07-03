import actionTypes from '../../../actions/actionTypes';
import SearchService from  '../../../services/searchService';
import Utils from '../../../utils/utils';

export const addRecentSearch = search => ({
    type: actionTypes.ADD_RECENT_SEARCH,
    search
});

export const setSearchTerm = term => ({
    type: actionTypes.SET_SEARCH_TERM,
    term
});

export const clearSearchResults = () => ({
    type: actionTypes.CLEAR_SEARCH_RESULTS
});

export const setSearchType = (searchType) => ({
    type: actionTypes.SET_SEARCH_TYPE,
    searchType
});

export const loadPlaylists = playlists => ({
    type: actionTypes.LOAD_SEARCH_PLAYLISTS,
    playlists
});

export const loadAlbums = albums => ({
    type: actionTypes.LOAD_SEARCH_ALBUMS,
    albums
});

export const loadArtists = artists => ({
    type: actionTypes.LOAD_SEARCH_ARTISTS,
    artists
});

export const loadTracks = tracks => ({
    type: actionTypes.LOAD_SEARCH_TRACKS,
    tracks
});

export function addSearch(search) {
    return dispatch => {
        dispatch(addRecentSearch(search));
    }
}

export function makeRequest(type, searchTerm) {
    return dispach => {
        SearchService.getSearchItems(type, searchTerm)
            .then(res => {
                switch (type) {
                    case 'playlist':
                        let playlists = Utils.parsePlaylists(res);
                        dispach(loadPlaylists(playlists));
                        return;
                    case 'album':
                        let albums = Utils.parseAlbums(res);
                        dispach(loadAlbums(albums));
                        return;
                    case 'artist':
                        let artists = Utils.parseArtists(res);
                        dispach(loadArtists(artists));
                        return;
                    case 'track':
                        let tracks = Utils.parseTracks(res);
                        dispach(loadTracks(tracks));
                        return;
                }
            })
            .catch(err => console.log(err));
    }
}