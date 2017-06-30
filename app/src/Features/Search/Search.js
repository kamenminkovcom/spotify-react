import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchInput from './components/SearchInput';
import RecentSearchesList from './components/RecentSearchesList';
import * as actions from './actions/search';
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
        return (
            <div>
                <SearchInput inputOnChange={this.inputOnChange} handleCursorOut={this.search}></SearchInput>
                <RecentSearchesList searches={[...this.props.search.recentSearches.values()].reverse()}/>
            </div>
        )

        // return (
        //     <div>
        //         <SearchInput inputOnChange={this.inputOnChange} handleCursorOut={this.search}></SearchInput>
        //     </div>
        // );
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