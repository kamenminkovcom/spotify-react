import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchInput from './components/SearchInput';
import RecentSearchesList from './components/RecentSearchesList';
import * as actions from './actions/search';
import DataWrapper from './components/DataWrapper';
import coverArtsPresenter from '../../components/HOC/coverArtsPresenter';
import LocalNavbar from '../../components/common/LocalNavbar';
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
        this.inputOnChange = this.inputOnChange.bind(this);
        this.search = this.search.bind(this);
    }

    inputOnChange(event) {
        let value = event.target.value;
        this.setState({searchValue: value});
    }


    search(event) {
        let value = event.target.value;
        let search = {
            navigation: `/search/results/${value}`,
            content: value
        };
        this.props.actions.addSearch(search);
    }


    render() {
        let DataContainer = null;
        if (this.props.search.searchTerm === 'aa') {
            return (
                <div>
                    <SearchInput inputOnChange={this.inputOnChange} handleCursorOut={this.search}></SearchInput>
                    <RecentSearchesList searches={[...this.props.search.recentSearches.values()].reverse()}/>
                </div>
            )
        }

        switch (this.props.match.params.id) {
            case 'playlists':
                this.props.actions.getPlaylists('playlist');
                DataContainer = (
                    <CoverArtsList coverArts={this.props.search.playlists}/>
                );
                break;
            case 'albums':
                break;
            case 'artists':
                break;
            case 'tracks':
                break;
        }
        return(
            <div>
                <SearchInput inputOnChange={this.inputOnChange} handleCursorOut={this.search}></SearchInput>
                <LocalNavbar roles={['playlists', 'albums', 'artists']} componentType={'your-music'}/>
                <DataContainer />
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