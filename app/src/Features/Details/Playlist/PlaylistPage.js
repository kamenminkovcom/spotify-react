import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tracks from '../../../components/common/Tracks/Tracks';
import * as actions from './actions/playlist';
import Loading from '../../../components/common/Loading/Loading';
import CoverArt from '../../../components/common/CoverArt/CoverArt';
import constants from '../../../utils/constants';
import playlistPage from './playlistPage.css';
const defaultImageUrl = constants.defaultPictureUrl;

class PlaylistPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.actions.clearPlaylist();
    }

    componentWillMount() {
        let playlistId = this.props.match.params.id;
        let username = this.props.match.params.username;
        this.props.actions.getPlaylist(playlistId, username);
    }

    render() {
        if (this.props.playlist === null) {
            return(
                <Loading/>
            )
        }
        const imageUrl = this.props.playlist.images.length === 0 ? defaultImageUrl : this.props.playlist.images[0].url;
        const detailsnavigartion = `/user/${this.props.playlist.owner.id}/playlist/${this.props.playlist.id}`;
        const owner = {name: this.props.playlist.owner.id, detailsNavigation: `/user/${this.props.playlist.owner.id}`};
        return(
            <div className="playlist-details">
                <CoverArt name={this.props.playlist.name} imageUrl={imageUrl} detailsNavigation={detailsnavigartion} owners={[owner]}/>
                <Tracks tracks={this.props.playlist.tracks}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        playlist: state.playlist
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);