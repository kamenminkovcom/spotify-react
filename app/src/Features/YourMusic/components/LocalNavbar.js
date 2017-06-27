import React from 'react';
import {Link} from 'react-router-dom';

let LocalNavbar = (props) => {
    return(
        <ul className="local-navbar">
           <li><Link to="/your-music/playlists">Playlists</Link></li>
           <li><Link to="/your-music/albums">Albums</Link></li>
           <li><Link to="/your-music/artists">Artists</Link></li>
        </ul>
    )
};

export default LocalNavbar;
