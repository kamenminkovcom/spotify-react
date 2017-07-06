import React from 'react';
import { withRouter } from 'react-router'
import StaticLinksGroup from './components/StaticLinksGroup';

class Navbar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const path = this.props.location.pathname.split('/');
        const active = path[1];
        return(
            <div className="navbar">
                <StaticLinksGroup active={active} />
            </div>
        );
    }
}



export default withRouter(Navbar);