import React, { Component } from 'react';
import Track from './Track';

let Tracks = (props) => {
    let tracks = props.tracks;
    return(
        <div>
            <ul>
                {tracks.map((t, i)=> <Track name={t.name} index={i+1} duration={t.duration}/>)}
            </ul>
        </div>
    )
};

export default Tracks 