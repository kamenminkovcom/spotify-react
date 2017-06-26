import React, { Component } from 'react';
import NavListItem from './NavListItem';

let StaticLinksGroup = () => {
    return(
        <div>
            <div className="search-group">
                <NavListItem role='Search' navigation='/search'/>
            </div>
            <div className="nav-group">
                <div>
                     <NavListItem role='Browse' navigation='/browse'/>
                </div>
                <div>
                    <NavListItem role='Your Music' navigation='/your-music'/>
                </div>
            </div>
        </div>
    );
};

export default StaticLinksGroup;