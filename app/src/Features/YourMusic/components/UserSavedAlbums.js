import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import * as actions from '../actions/user';


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
                <CoverArtsList coverArts={this.props.user.albums} />
            </div>
        )
    }
}

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