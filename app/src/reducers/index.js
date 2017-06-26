import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import playlists from '../Features/YourMusic/reducers/playlistsReducer';
import albums from '../Features/YourMusic/reducers/albumsReducer';
import followArtists from '../Features/YourMusic/reducers/followArtistsReducer';
import album from '../Features/Details/Album/reducers/albumReducer';

const rootReducer = combineReducers({
    routing,
    playlists,
    albums,
    followArtists,
    album
});

export default rootReducer;