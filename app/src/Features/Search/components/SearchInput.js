import React from 'react';
import PropTypes from 'prop-types';

let SearchInput = ({handleChange, handleCursorOut, value}) => {
    return (
        <div className="search-input-container">
            <h4>Search for an Artist, Song, Album or Playlist</h4>
            <input className="search-input" type="text" value={value} onChange={handleChange} placeholder="Start typing..."/>
        </div>
    );
};

SearchInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default SearchInput;