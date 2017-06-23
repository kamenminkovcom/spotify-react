import React, { Component } from 'react';

let SearchInput = (props) => {
    return(
        <input type="text" value={props.searchValue} onChange={props.inputOnChange}/>
    );
};

export default SearchInput;