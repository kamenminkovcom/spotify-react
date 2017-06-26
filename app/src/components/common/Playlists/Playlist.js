import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import playlist from './playlist.css';

let Playlist = (props) => {
    return(
        <div className='playlist-default'>
            <Link to="">
                <div>
                    <img src="../../../../public/albumCover.jpg" alt="" />
                </div>
            </Link>
            <Link to="" className="name-link">
                {props.name}
            </Link>
            <Link to="" className="username-link">
                {props.username}
            </Link> 
        </div>
    )
};

export default Playlist;