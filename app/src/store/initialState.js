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
        tracks: null,
        albums: null,
        playlists: null,
        artists: null
    }
};

export default initialState;