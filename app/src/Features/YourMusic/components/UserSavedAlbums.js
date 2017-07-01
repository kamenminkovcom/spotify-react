import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import coverArtsPresenter from '../../../components/HOC/coverArtsPresenter';
import * as actions from '../actions/user';

let UserSavedAlbums = (props) => (
    <div>
        <CoverArtsList coverArts={props.user.albums} />
    </div>
);

UserSavedAlbums = coverArtsPresenter((props) => {
    props.actions.getUserSavedAlbums();
}, UserSavedAlbums);

const mapStateToProps = (state, ownProps) => (
    {
        user: state.user
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSavedAlbums);