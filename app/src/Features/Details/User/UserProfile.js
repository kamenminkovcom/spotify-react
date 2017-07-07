import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserDetails from './components/UserDeatails';
import CoverArtsList from '../../../components/common/CoverArt/CoverArtsList';
import Loading from '../../../components/common/Loading/Loading';
import * as actions from './actions/userProfile';


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        document.body.className = '';
        this.props.actions.clearProfile();
    }

    componentWillMount() {
        document.body.className = 'green-theme';
        let userId = this.props.match.params.id;
        this.props.actions.getUserProfileData(userId);
    }

    render() {
        if (!this.props.user.details) {
            return (
                <Loading/>
            )
        }
        return(
            <div>
                <UserDetails imageUrl={this.props.user.details.profileData.imageUrl} username={this.props.user.details.profileData.username}/>
                <CoverArtsList coverArts={this.props.user.details.playlists}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);