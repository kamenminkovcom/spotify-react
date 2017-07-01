import axios from 'axios';
import Utils from '../utils/utils';

const baseUrl = 'https://api.spotify.com/v1/search';

class SearchService {

    static getSearchItems(type) {
        const token = Utils.getAccessToken();
        return axios({
            method: 'GET',
            url: baseUrl,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                limit: 50,
                type
            }
        })
            .then(res => res.data);
    }
}

export default SearchService;