import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import playlists from '../Features/YourMusic/reducers/playlistsReducer';
import albums from '../Features/YourMusic/reducers/albumsReducer';
import followArtists from '../Features/YourMusic/reducers/followArtistsReducer';

const rootReducer = combineReducers({
    routing,
    playlists,
    albums,
    followArtists
});

export default rootReducer;