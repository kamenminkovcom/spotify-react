import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
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
                <CoverArtsList coverArts={this.props.playlists}/>
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