class AlbumDetailsModel {
    constructor(id, name, artists, genres, images, tracks) {
        this.id = id;
        this.name = name;
        this.artists = artists;
        this.genres = genres;
        this.images = images;
        this.tracks = tracks.items;
    }
}

export default AlbumDetailsModel;