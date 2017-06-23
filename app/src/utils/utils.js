class Utils {

    static getCurrentUserId() {
        return localStorage.getItem('userId');
    } 

    static getAccessToken() {
        return localStorage.getItem('spotifyToken');
    }
}

export default Utils;