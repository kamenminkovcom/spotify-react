
class LoginUtils {
   static handleSpotifyConnect(){
        let SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize',
            SPOTIFY_CLIENT_ID = '63f1cc45d2164d73ab8546dffb9ab055',
            SPOTIFY_REDIRECT_URL = 'http://localhost:3002/callbackSpotify',
            SPOTIFY_RESPONSE_TYPE = 'token';

        let authURL =
            SPOTIFY_AUTH_URL + "?client_id=" +
            SPOTIFY_CLIENT_ID + "&redirect_uri=" +
            encodeURIComponent(SPOTIFY_REDIRECT_URL) + "" +
            "&response_type=" + SPOTIFY_RESPONSE_TYPE + "" +
            "&scope=user-library-read user-follow-read";

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
        };
    }
}

export default LoginUtils;
