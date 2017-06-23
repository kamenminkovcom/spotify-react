import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlbumContainer from './AlbumContainer';
import UserService from '../../services/userService';
import Utils from '../../utils/utils';
import AlbumModel from '../../utils/Models/albumModel';
import Playlists from '../../components/common/Playlists';

class Browse extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     albums: [
        //         {name: 'Ne'},
        //         {name: 'Znam'},
        //         {name: 'Nito'},
        //         {name: 'Edin'},
        //         {name: 'Album'}
        //     ]
        // }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Playlists albums={this.props.albums} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        albums: state.albums
    }
};



export default connect(mapStateToProps)(Browse);
// export default Browse;