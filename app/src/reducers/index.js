import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import playlists from '../Features/YourMusic/reducers/playlistsReducer';
import albums from '../Features/YourMusic/reducers/albumsReducer';
import followArtists from '../Features/YourMusic/reducers/followArtistsReducer';
import album from '../Features/Details/Album/reducers/albumReducer';
import playlist from '../Features/Details/Playlist/reducers/playlistReducer';
import artist from '../Features/Details/Artist/reducers/artistReducer';
import browse from '../Features/Browse/reducers/browseReducer';
import view from '../Features/Details/View/reducers/viewReducer';

const rootReducer = combineReducers({
    routing,
    playlists,
    albums,
    followArtists,
    album,
    playlist,
    artist,
    browse,
    view
});

export default rootReducer;