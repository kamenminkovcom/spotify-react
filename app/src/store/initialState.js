const initialState = {
    album: null,
    playlist: null,
    artist: {
        albums: [],
        singles: []
    },
    browse: {
        newReleases: [],
        genres: [],
        featured: []
    },
    view: {
        playlists: []
    },
    user: {
        details: null,
        followArtists: [],
        albums: [],
        playlists: []
    },
    search: {
        recentSearches: new Map(),
        searchTerm: '',
        searchType: 'playlist',
        tracks: [],
        albums: [],
        playlists: [],
        artists: [],
        isInputReady: false
    }
};

export default initialState;