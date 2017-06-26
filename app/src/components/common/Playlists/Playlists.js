import React, { Component } from 'react';
import Playlist from './Playlist';
import playlists from './playlists.css';

let Playlists = (props) => {
    let albums = props.albums;
    return (
        <div className="playlists">
            {albums.map((p, i) => <Playlist name={p.name} username={p.username} key={p.name + i} />)}
        </div>
    )
};

export default Playlists;