import React, { Component } from 'react';
import Playlist from './Playlist';

let Playlists = (props) => {
    let albums = props.albums;
    return (
        <div>
            {albums.map((p, i) => <Playlist name={p.name} username={p.username} key={p.name + i} />)}
        </div>
    )
};

export default Playlists;