import React, { Component } from 'react';
import Album from './Album';
import albums from './albums.css';

let Albums = (props) => {
    let albums = props.albums;
    return (
        <div className="albums">
            {albums.map((p, i) => <Album name={p.name} artists={p.artists} images={p.images} key={p.name + i} />)}
        </div>
    )
};

export default Albums;