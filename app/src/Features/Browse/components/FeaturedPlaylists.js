import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import coverArtsPresenter from '../../../components/HOC/coverArtsPresenter';
import * as actions from '../actions/browse';
import Heading from '../../../components/common/Heading/Heading';

let FeaturedPlaylists = (props) => (
    <div>
        <Heading text={'New Releases'}/>
        <CoverArtsList coverArts={props.browse.featured}/>
    </div>
);

FeaturedPlaylists = coverArtsPresenter((props) => {
    props.actions.getFeaturedPlaylists();
})(FeaturedPlaylists);

const mapStateToProps = (state, ownProps) => (
    {
        browse: state.browse
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);