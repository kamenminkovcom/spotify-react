import React from 'react';
import axios from 'axios';

class CallbackSpotify extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let hash = {};
        this.props.location.hash.replace(/^#\/?/, '').split('&').forEach((kv) => {
            let spl = kv.indexOf('=');
            if (spl != -1) {
                hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl+1));
            }
        });
        this.getUserData(hash.access_token);
    }

    getUserData(accessToken) {
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Authorization': 'Bearer ' + accessToken
             }
        })
        .then(res => {
            localStorage.setItem('userId', res.data.id);
            localStorage.setItem('spotifyToken', accessToken);
            window.close();
        })
        .catch(err => console.log(err)) 
    }

    render() {
        return(
            <div></div>
        )

    }
}

export default CallbackSpotify;