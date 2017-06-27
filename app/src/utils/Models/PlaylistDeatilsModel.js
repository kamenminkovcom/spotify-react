class PlaylistDeatilsModel {
    constructor(id, name, images, tracks, owner) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.tracks = tracks.items;
        this.owner = owner;
    }
}

export default PlaylistDeatilsModel;