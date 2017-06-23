import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import albums from './albumsReducer';

const rootReducer = combineReducers({
    routing,
    albums
})

export default rootReducer;