import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import album from './album.css';

let Album = (props) => {
    return(
        <div className='album-default'>
            <Link to="">
                <div>
                    <img className="album-image" src={props.images[0].url} alt="" />
                </div>
            </Link>
            <Link to="" className="name-link">
                {props.name}
            </Link>
            {props.artists.map(a => <Link to="" className="artist-name-link">{a.name}</Link>)}
        </div>
    )
};

export default Album;