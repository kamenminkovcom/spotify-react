import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/followArtists';
import Artists from '../../../components/common/Artists/Artists';

class UserFollowArtists extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.getFollowArtists();
    }

    render() {
        return(
            <div>
                <Artists artists={this.props.followArtists}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        followArtists: state.followArtists
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserFollowArtists);