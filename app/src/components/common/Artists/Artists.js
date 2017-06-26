import React, { Component } from 'react';
import Artist from './Artist';
import artists from './artists.css';

let Artists = (props) => {
    let artists = props.artists;
    return (
        <div className="artists">
            {artists.map((p, i) => <Artist name={p.name} images={p.images} key={p.name + i} />)}
        </div>
    )
};

export default Artists;