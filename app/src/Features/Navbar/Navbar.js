import React, { Component } from 'react';
import StaticLinksGroup from './StaticLinksGroup';

class Navbar extends React.Component {
    constructor(props) {
        super(); 
    }

    render() {
        return(
            <div className="navbar">
                <StaticLinksGroup />
            </div>
        );
    }
}

export default Navbar;