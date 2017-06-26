import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Playlists from '../../../components/common/Playlists/Playlists';
import * as actions from '../actions/playlists';

class YourPlaylists extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.getPlaylists();
    }

    render() {
        return (
            <div>
                <Playlists albums={this.props.playlists}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => (
    {
        playlists: state.playlists
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(YourPlaylists);