import axios from 'axios';

class AuthorizationService {

    static getAuthorizationInfo(accessToken) {
            return  axios({
                method: 'GET',
                url: 'https://api.spotify.com/v1/me',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            });
    }
}

export default AuthorizationService;