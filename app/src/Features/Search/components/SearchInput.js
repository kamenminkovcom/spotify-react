import React from 'react';

let SearchInput = (props) => {
    return (
        <div className="search-input-container">
            <h4>Search for an Artist, Song, Album or Playlist</h4>
            <input className="search-input" type="text"  onBlur={props.handleCursorOut} placeholder="Start typing..."/>
        </div>
    );
};

export default SearchInput;