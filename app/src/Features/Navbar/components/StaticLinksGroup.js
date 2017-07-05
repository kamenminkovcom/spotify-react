import React, { Component } from 'react';
import NavListItem from './NavListItem';
import Utils from '../../../utils/utils';

let StaticLinksGroup = () => {
    return(
        <div>
            <div className="search-group search-btn-default">
                <NavListItem role='Search' navigation='/search/playlist'/>
                <div className="icon-search"></div>
            </div>
            <div className="nav-group">
                <div className="search-btn-default">
                     <NavListItem role="Browse" navigation="/browse/featured"/>
                </div>
                <div className="search-btn-default">
                    <NavListItem role="Your Music" navigation="/your-music/playlists"/>
                </div>
            </div>
            <div className="search-btn-default">
                <NavListItem role={Utils.getCurrentUserId()} navigation="/settings/account"/>
            </div>
        </div>
    );
};

export default StaticLinksGroup;