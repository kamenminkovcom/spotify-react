import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../../../utils/utils';
import Albums from '../../../components/common/Albums/Albums';
import * as actions from '../actions/albums';


class UserSavedAlbums extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.getUserSavedAlbums();
    }   

    render() {
        return (
            <div>
                <Albums albums={this.props.albums} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        albums: state.albums
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSavedAlbums);