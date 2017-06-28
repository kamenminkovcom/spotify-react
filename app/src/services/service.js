import axios from 'axios';

class Service {
    static getRequest(url, token) {
        return axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                limit: 50
            }
        })
    }
}

export default Service;