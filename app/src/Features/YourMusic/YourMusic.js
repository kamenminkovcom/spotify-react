import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LocalNavbar from '../../components/common/LocalNavbar';
import UserPlaylists from './components/UserPlaylists.js';
import UserSavedAlbums from './components/UserSavedAlbums.js';
import UserFollowArtists from './components/UserFollowArtists.js';
import yourMusic from './YourMusic.css';

class YourMusic extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <LocalNavbar roles={['playlists', 'albums', 'artists']} componentType={'your-music'}/>
                <Switch>
                    <Route path='/your-music/playlists' component={UserPlaylists} />
                    <Route path='/your-music/albums' component={UserSavedAlbums} />
                    <Route path='/your-music/artists' component={UserFollowArtists} />
                </Switch>
            </div>
        );
    }
}

export default YourMusic;