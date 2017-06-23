import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './containers/App';
import {loadAlbums} from './actions/loadAlbums' 

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

//store.dispatch(loadAlbums([{name: 'AAA', username: 'Kamen'}, {name: 'BBB', username: 'Nemak'},{name: 'CCC', username: 'Sashka Vaseva'}]));

ReactDOM.render(
    <Provider store={store} history={history}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
