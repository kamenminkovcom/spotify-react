import React, { Component } from 'react';
import Album from './Album';

let AlbumContainer = (props) => {
    let albums = props.albums;
    return(
        <div>
            {albums.map(al => <Album name={al.name} kay={al.name}></Album>)}
        </div>
    )
};

export default AlbumContainer;