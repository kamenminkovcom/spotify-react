const initialState = {
    playlists: [],
    albums: [],
    followArtists: [],
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
    }
};

export default initialState;