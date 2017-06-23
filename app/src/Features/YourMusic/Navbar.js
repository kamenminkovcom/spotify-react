import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let Navbar = (props) => {
    return(
        <ul>
           <li><Link to="/your-music/playlists">Playlists</Link></li>
           <li><Link to="/your-music/albums">Albums</Link></li>
           <li><Link to="/your-music/artists">Artists</Link></li>
        </ul>
    )
};

export default Navbar;
