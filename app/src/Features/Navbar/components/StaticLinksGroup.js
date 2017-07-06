import React from 'react';
import PropTypes from 'prop-types';
import NavListItem from './NavListItem';
import Utils from '../../../utils/utils';
import {Link} from 'react-router-dom';

let StaticLinksGroup = ({active}) => {
    return(
        <div>
            <div className="search-btn-default">
                <Link to="/browse/featured">
                    <div className="spotify-logo-container">
                        <img src="https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png" alt=""/>
                    </div>
                </Link>
            </div>
            <div className="search-group search-btn-default">
                <NavListItem role='Search' navigation='/search/playlist' active={active}>
                </NavListItem>
               <div className="icon-container">
                   <img src="https://www.thunderstone.com/media/1054/search-icon.png" alt=""/>
               </div>
            </div>
            <div className="nav-group">
                <div className="search-btn-default">
                     <NavListItem role="Browse" navigation="/browse/featured" active={active}/>
                </div>
                <div className="search-btn-default">
                    <NavListItem role="Your Music" navigation="/your-music/playlists" active={active}/>
                </div>
            </div>
            <div className="search-btn-default account-btn">
                <NavListItem role={Utils.getCurrentUserId()} navigation="/settings/account" active={active}/>
                <div className="avatar-icon-container">
                    <img src="http://webmii.com/images/user%20white.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

StaticLinksGroup.propTypes = {
  active: PropTypes.string
};

export default StaticLinksGroup;