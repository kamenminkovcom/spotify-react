import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browse from './Features/Browse/Browse';
import Search from './Features/Search/Search';
import YourMusic from './Features/YourMusic/YourMusic';
import CallbackSpotify from './Features/Login/callbackSpotify';
import UserPlaylists from './Features/YourMusic/UserPlaylists';
import Albums from './Features/YourMusic/Albums';
import Artists from './Features/YourMusic/Artists';
import layout from './layout.css';

const Layout = () => (
    <main className='layout'>
        <Switch>
            <Route path='/browse' exact component={Browse} />
            <Route path='/search' component={Search} />
            <Route path='/your-music' component={YourMusic} />
            <Route path='/callbackSpotify' component={CallbackSpotify} />
        </Switch>
    </main>
);

export default Layout;