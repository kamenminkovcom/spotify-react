import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/album';

class AlbumPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let albumId = this.props.match.params.id;
        this.props.actions.getAlbum(albumId);
    }

    render() {
        return(
            <div className="album-details">
                <div>

                </div>
                <div className="album-songs">

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        album: state.album
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);