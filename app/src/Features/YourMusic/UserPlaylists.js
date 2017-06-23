import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserService from '../../services/userService';
import Utils from '../../utils/utils';
import Playlists from '../../components/common/Playlists';
import * as actions from '../../actions/loadAlbums';

class YourPlaylists extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.getAlbums();
    }

    render() {
        return (
           <div>
                <Playlists albums={this.props.albums}/>
           </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        albums: state.albums
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(YourPlaylists);