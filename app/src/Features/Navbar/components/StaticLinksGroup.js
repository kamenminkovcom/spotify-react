import React, { Component } from 'react';
import NavListItem from './NavListItem';
import Utils from '../../../utils/utils';

let StaticLinksGroup = () => {
    return(
        <div>
            <div className="search-group">
                <NavListItem role='Search' navigation='/search'/>
            </div>
            <div className="nav-group">
                <div>
                     <NavListItem role="Browse" navigation="/browse/featured"/>
                </div>
                <div>
                    <NavListItem role="Your Music" navigation="/your-music/playlists"/>
                </div>
            </div>
            <div>
                <NavListItem role={Utils.getCurrentUserId()} navigation="/settings/account"/>
            </div>
        </div>
    );
};

export default StaticLinksGroup;