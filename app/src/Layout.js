import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Features/Login/Login';
import Browse from './Features/Browse/Browse';
import Search from './Features/Search/Search';
import YourMusic from './Features/YourMusic/YourMusic';
import CallbackSpotify from './Features/Login/callbackSpotify';
import AlbumPage from './Features/Details/Album/AlbumPage';
import PlaylistPage from './Features/Details/Playlist/PlaylistPage';
import ArtistPage from './Features/Details/Artist/ArtistPage';
import View from './Features/Details/View/View';
import UserProfile from './Features/Details/User/UserProfile';
import PrivateRoute from './components/common/PrivateRoute';
import Account from './Features/Account/Account';
import layout from './layout.css';

const Layout = () => (
    <main className='layout'>
        <Switch>
            <Route exact path='/' render={() => (
                localStorage.hasOwnProperty('userId') ?
                    (<Redirect to='/your-music/playlists'/>) :
                    (<Redirect to='/login'/>)
            )}/>
            <Route path='/login' exact component={Login} />
            <Route path='/callbackSpotify' component={CallbackSpotify} />
            <PrivateRoute path='/browse' component={Browse}/>
            <PrivateRoute path='/your-music' component={YourMusic}/>
            <PrivateRoute path='/album/:id' component={AlbumPage}/>
            <PrivateRoute path='/user/:username/playlist/:id' component={PlaylistPage}/>
            <PrivateRoute path='/artist/:id' component={ArtistPage}/>
            <PrivateRoute path='/view/:id' component={View}/>
            <PrivateRoute path='/user/:id' component={UserProfile}/>
            <PrivateRoute path='/search/:id' component={Search}/>
            <PrivateRoute path='/settings/account' component={Account}/>
        </Switch>
    </main>
);

export default Layout;