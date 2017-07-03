import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchInput from './components/SearchInput';
import RecentSearchesList from './components/RecentSearchesList';
import * as actions from './actions/search';
import DataWrapper from './components/DataWrapper';
import LocalNavbar from '../../components/common/LocalNavbar';
import Loading from '../../components/common/Loading/Loading';
import CoverArtsList from '../../components/common/CoverArt/CoverArtsList';
import Tracks from '../../components/common/Tracks/Tracks';
import Artists from '../../components/common/Artists/Artists';
import search from './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.search = this.search.bind(this);
    }

    componentWillUnmount() {
        this.props.actions.clearSearchResults();
    }

    componentWillUpdate(nextProps) {
        const searchType = this.props.match.params.id;
        this.props.actions.setSearchType(searchType);
        if (this.props.search[searchType + 's'] === null) {
            this.props.actions.makeRequest(searchType,nextProps.search.searchTerm);
        }
    }

    search(event) {
        let value = event.target.value;
        let search = {
            navigation: `/search/results/${value}`,
            content: value
        };
        this.props.actions.addSearch(search);
        this.props.actions.setSearchTerm(value);
    }


    render() {
        let searchTerm = this.props.search.searchTerm;
        let searchType = this.props.search.searchType;
        if (searchTerm === '') {
            return (
                <div>
                    <SearchInput handleCursorOut={this.search}></SearchInput>
                    <RecentSearchesList searches={[...this.props.search.recentSearches.values()].reverse()}/>
                </div>
            )
        }

        if (this.props.search[searchType + 's'] === null) {
           return(
               <Loading/>
           )
        }

        return(
            <div>
                <SearchInput inputOnChange={this.inputOnChange} handleCursorOut={this.search}></SearchInput>
                <LocalNavbar roles={['playlist', 'album', 'artist', 'track']} componentType={'search'}/>
                <DataWrapper type={this.props.search.searchType} data={this.props.search[searchType + 's']}/>
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