import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

let Playlist = (props) => {
    return(
        <div>
            <Link to="">
                <div>
                    <img src="../../../../public/albumCover.jpg" alt="" />
                </div>
            </Link>
            <Link to="">
                {props.name}
            </Link>
            <Link to="">
                {props.username}
            </Link> 
        </div>
    )
};

export default Playlist;