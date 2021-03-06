import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/artist';
import Loading from '../../../components/common/Loading/Loading';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import Heading from '../../../components/common/Heading/Heading';

class ArtistPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        document.body.className = '';
        this.props.actions.clearArtist();
    }

    componentWillMount() {
        document.body.classList = 'gray-theme';
        let artistId = this.props.match.params.id;
        this.props.actions.getArtistAlbums(artistId);
    }

    render() {
        if (this.props.artist === null) {
            return(
                <Loading/>
            )
        }
        return(
            <div>
                <Heading text={'Albums'}/>
                <CoverArtsList coverArts={this.props.artist.albums}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => (
    {
        artist: state.artist
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);