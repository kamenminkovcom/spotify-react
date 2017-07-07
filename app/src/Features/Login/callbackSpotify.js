import React from 'react';
import AuthorizationService from '../../services/authorizationService';

class CallbackSpotify extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let hash = {};
        this.props.location.hash.replace(/^#\/?/, '').split('&').forEach((kv) => {
            let spl = kv.indexOf('=');
            if (spl != -1) {
                hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
            }
        });
        this.getUserData(hash.access_token);
    }

    getUserData(accessToken) {
        AuthorizationService.getAuthorizationInfo(accessToken)
            .then(res => {
                localStorage.setItem('userId', res.data.id);
                localStorage.setItem('spotifyToken', accessToken);
                window.opener.location = '/your-music/playlists';
                window.close();
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div></div>
        )

    }
}

export default CallbackSpotify;