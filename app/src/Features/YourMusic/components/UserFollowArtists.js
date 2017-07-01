import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/user';
import coverArtsPresenter from '../../../components/HOC/coverArtsPresenter';
import Artists from '../../../components/common/Artists/Artists';

let UserFollowArtists = (props) => (
    <div>
        <Artists artists={props.user.followArtists}/>
    </div>
);

UserFollowArtists = coverArtsPresenter((props) => {
    props.actions.getFollowArtists();
}, UserFollowArtists);

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

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowArtists);