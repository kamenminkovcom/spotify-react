import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import coverArtsPresenter from '../../../components/HOC/coverArtsPresenter';
import * as actions from '../actions/user';

let YourPlaylists = (props) => (
    <div>
        <CoverArtsList coverArts={props.user.playlists}/>
    </div>
);

YourPlaylists = coverArtsPresenter((props) => {
    props.actions.getPlaylists();
}, YourPlaylists);

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

export default connect(mapStateToProps, mapDispatchToProps)(YourPlaylists);