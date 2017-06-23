import React from 'react';
import axios from 'axios';
//import login from './login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.props = {

        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.handleLogin = this.handleLogin.bind(this);
    }


    handleLogin() {
        this.handleSpotifyConnect();
    }    

    handleSpotifyConnect(){
        let SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize',
            SPOTIFY_CLIENT_ID = '63f1cc45d2164d73ab8546dffb9ab055',
            SPOTIFY_REDIRECT_URL = 'http://localhost:3002/callbackSpotify',
            SPOTIFY_RESPONSE_TYPE = 'token';

        let authURL =
            SPOTIFY_AUTH_URL + "?client_id=" +
            SPOTIFY_CLIENT_ID + "&redirect_uri=" +
            encodeURIComponent(SPOTIFY_REDIRECT_URL) + "" +
            "&response_type=" + SPOTIFY_RESPONSE_TYPE;

        let width = 450,
            height = 730,
            left = (window.innerWidth / 2) - (width / 2),
            top = (window.innerHeight / 2) - (height / 2);

        let w = window.open(
            authURL,
            'Spotify',
            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
        );

        window.addEventListener("message", function(event) {
            let hash = JSON.parse(event.data);
            if (hash.type == 'access_token_spotify') {
                callback(hash.access_token);
            }
        }, false);

        let callback = function(token){
            localStorage.setItem('spotify_token',token);
            this.setSpotifyDetails(token);
        };
    }

    setSpotifyDetails(token){
        axios({
            method: 'GET',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    

    render() {
        return(
            <div className='login-page'>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;