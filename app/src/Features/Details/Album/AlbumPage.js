import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tracks from '../../../components/common/Tracks/Tracks';
import * as actions from './actions/album';
import Loading from '../../../components/common/Loading/Loading';
import CoverArt from '../../../components/common/CoverArt/CoverArt';
import albumPage from './albumPage.css';

class AlbumPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        document.body.className = '';
        this.props.actions.clearAlbum();
    }

    componentWillMount() {
        document.body.className = 'light-gray-theme';
        let albumId = this.props.match.params.id;
        this.props.actions.getAlbum(albumId);
    }

    render() {
        if (this.props.album === null) {
            return (
                <Loading/>
            )
        }
        const detailsNavigation = `/album/${this.props.album.id}`;
        const imageUrl = this.props.album.images[0].url;
        return (
            <div className="album-details">
                <CoverArt detailsNavigation={detailsNavigation} imageUrl={imageUrl} name={this.props.album.name} owners={this.props.album.artists}/>
                <Tracks tracks={this.props.album.tracks}/>
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