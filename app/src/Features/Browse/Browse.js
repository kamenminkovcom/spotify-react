import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import LocalNavbar from '../../components/common/LocalNavbar';
import FeaturedPlaylist from './components/FeaturedPlaylists';
import Genres from './components/Genres';
import NewReleases from './components/NewReleases';


class Browse extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <LocalNavbar componentType={'browse'} roles={['featured', 'genres', 'new releases']}/>
                <Switch>
                    <Route path='/browse/featured' component={FeaturedPlaylist} />
                    <Route path='/browse/genres' component={Genres} />
                    <Route path='/browse/newreleases' component={NewReleases} />
                </Switch>
            </div>
        );
    }
}

export default Browse;