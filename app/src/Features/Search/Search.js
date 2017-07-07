import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Switch, Route} from 'react-router-dom';
import SearchInput from './components/SearchInput';
import RecentSearchesList from './components/RecentSearchesList';
import * as actions from './actions/search';
import searchResultsPresenter from '../../components/HOC/searchResultsPresenter';
import LocalNavbar from '../../components/common/LocalNavbar/LocalNavbar';
import Utils from '../../utils/utils';
import search from './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'playlist'
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.search = Utils.debounce(this.search, 1000);
        this.callSearch = this.callSearch.bind(this);
        this.searchDifferentType = this.searchDifferentType.bind(this);
        this.recentSearchEvent = this.recentSearchEvent.bind(this);
        this.changeActive = this.changeActive.bind(this);
    }

    componentWillMount() {
        document.body.className = 'dark-theme';
    }

    componentWillUnmount() {
        document.body.className = '';
        this.props.actions.clearSearchResults();
    }

    callSearch(event) {
        const value = event.target.value;
        this.props.actions.clearSearchResults();
        this.props.actions.setSearchTerm(value);
        this.search(value);
    }

    search(value) {
        const search = {
            navigation: `/search/results/${value}`,
            content: value
        };
        this.props.actions.addSearch(search);
        const searchType = this.props.match.params.id;
        this.props.actions.setSearchType(searchType);
        if (value !== '') {
            this.props.actions.changeInputReady(true);
        }
    }

    searchDifferentType(event) {
        this.changeActive(event);
        const type = this.props.match.params.id;
        this.props.actions.setSearchType(type);
        this.search(this.props.search.searchTerm);
    }

    changeActive(event) {
        const active =  event.target.attributes[0].value;
        this.setState({active: active});
    }

    recentSearchEvent(event) {
        const value = event.target.attributes[0].value;
        this.props.actions.setSearchTerm(value);
        this.search(value);
    }


    render() {
        let searchTerm = this.props.search.searchTerm;
        let searchType = this.props.search.searchType;
        if (searchTerm === '') {
            return (
                <div className="search-default">
                    <SearchInput value={this.props.search.searchTerm} handleChange={this.callSearch}></SearchInput>
                    <RecentSearchesList searches={[...this.props.search.recentSearches.values()].reverse()} clickHandler={this.recentSearchEvent}/>
                </div>
            )
        }

        if (this.props.search.isInputReady) {
            let DataWrapper = null;
            return (
                <div className="search-default">
                    <SearchInput value={this.props.search.searchTerm} handleChange={this.callSearch}></SearchInput>
                    <LocalNavbar roles={['playlist', 'album', 'artist', 'track']} componentType={'search'}
                                 active={this.state.active} clickHandler={this.searchDifferentType}/>
                    <Switch>
                        <Route path="/search/playlist" render={function () {
                            DataWrapper = searchResultsPresenter('playlists', this.props);
                            return <DataWrapper/>;
                        }.bind(this)}/>
                        <Route path="/search/album" render={function () {
                            DataWrapper = searchResultsPresenter('albums', this.props);
                            return <DataWrapper/>;
                        }.bind(this)}/>
                        <Route path="/search/artist" render={function () {
                            DataWrapper = searchResultsPresenter('artists', this.props);
                            return <DataWrapper/>;
                        }.bind(this)}/>
                        <Route path="/search/track" render={function () {
                            DataWrapper = searchResultsPresenter('tracks', this.props);
                            return <DataWrapper/>;
                        }.bind(this)}/>
                    </Switch>
                </div>
            )
        }

        return (
            <div className="search-default">
                <SearchInput value={this.props.search.searchTerm}
                             handleChange={this.callSearch}></SearchInput>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        search: state.search
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);