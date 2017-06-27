import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browse from './Features/Browse/Browse';
import Search from './Features/Search/Search';
import YourMusic from './Features/YourMusic/YourMusic';
import CallbackSpotify from './Features/Login/callbackSpotify';
import AlbumPage from './Features/Details/Album/AlbumPage';
import PlaylistPage from './Features/Details/Playlist/PlaylistPage';
import ArtistPage from './Features/Details/Artist/ArtistPage';
import layout from './layout.css';

const Layout = () => (
    <main className='layout'>
        <Switch>
            <Route path='/browse' exact component={Browse} />
            <Route path='/search' component={Search} />
            <Route path='/your-music' component={YourMusic} />
            <Route path='/callbackSpotify' component={CallbackSpotify} />
            <Route path='/album/:id' component={AlbumPage} />
            <Route path='/user/:username/playlist/:id' component={PlaylistPage} />
            <Route path='/artist/:id' component={ArtistPage} />
        </Switch>
    </main>
);

export default Layout;