import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import album from '../Features/Details/Album/reducers/albumReducer';
import playlist from '../Features/Details/Playlist/reducers/playlistReducer';
import artist from '../Features/Details/Artist/reducers/artistReducer';
import browse from '../Features/Browse/reducers/browseReducer';
import view from '../Features/Details/View/reducers/viewReducer';
import user from '../Features/YourMusic/reducers/userReducer';

const rootReducer = combineReducers({
    routing,
    album,
    playlist,
    artist,
    browse,
    view,
    user
});

export default rootReducer;