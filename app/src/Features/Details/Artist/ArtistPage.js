import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/artist';
import Loading from '../../../components/common/Loading/Loading';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';

class ArtistPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
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