import actionTypes from '../../../actions/actionTypes';
import SearchService from  '../../../services/searchService';


export const addRecentSearch = search => ({
    type: actionTypes.ADD_RECENT_SEARCH,
    search
});

export const loadPlaylists = playlists => ({
    type: actionTypes.LOAD_SEARCH_PLAYLISTS,
    playlists
});

export const loadAlbums = albums => ({
    type: actionTypes.LOAD_SEARCH_PLAYLISTS,
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

export function getPlaylists(searchTerm) {
    return dispach => {
        debugger
        SearchService.getSearchItems(searchTerm)
            .then(res => {
               debugger
            });
    }
}

export function getAlbums(searchTerm) {
    return dispach => {
        SearchService.getSearchItems(searchTerm)
            .then(res => {
                debugger
            });
    }
}

export function getArtists(searchTerm) {
    return dispach => {
        SearchService.getSearchItems(searchTerm)
            .then(res => {
                debugger
            });
    }
}

export function getTracks(searchTerm) {
    return dispach => {
        SearchService.getSearchItems(searchTerm)
            .then(res => {
                debugger
            });
    }
}