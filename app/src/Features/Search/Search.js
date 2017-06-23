import React, { Component } from 'react';
import SearchInput from './SearchInput';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: ""
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    inputOnChange(event) {
        let value = event.target.value;
        this.setState({searchValue: value});
    }

    render() {
        return(
            <div>
                <SearchInput value={this.state.searchValue} inputOnChange={this.inputOnChange}></SearchInput>
            </div>
        );
    }
}

export default Search;