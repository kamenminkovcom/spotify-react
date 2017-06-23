import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import UserService from '../../services/userService';
import Utils from '../../utils/utils';
import AlbumModel from '../../utils/Models/albumModel';
import Playlists from '../../components/common/Playlists';
import Navbar from './Navbar.js';
import UserPlaylists from './UserPlaylists.js';
import Albums from './Albums.js';
import Artists from './Artists.js';

class YourMusic extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path='/your-music/playlists' component={UserPlaylists} />
                    <Route path='/your-music/albums' component={Albums} />
                    <Route path='/your-music/artists' component={Artists} />
                </Switch>
            </div>
        );
    }
}

export default YourMusic;