import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LocalNavbar from '../../components/common/LocalNavbar/LocalNavbar';
import UserPlaylists from './components/UserPlaylists.js';
import UserSavedAlbums from './components/UserSavedAlbums.js';
import UserFollowArtists from './components/UserFollowArtists.js';
import yourMusic from './YourMusic.css';

class YourMusic extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        document.body.className = 'red-theme';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

    render() {
        const path = this.props.location.pathname.split('/');
        const active = path[path.length - 1];
        return (
            <div>
                <LocalNavbar roles={['playlists', 'albums', 'artists']} componentType={'your-music'} active={active} />
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