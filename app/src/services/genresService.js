import Service from './service';
import Utils from '../utils/utils';

const url = 'https://api.spotify.com/v1/browse/categories';

class GenresService {
    static getAll() {
        const token = Utils.getAccessToken();
        return Service.getRequest(url,token)
            .then(res => res.data.categories.items)
            .catch(err => console.log(err));
    }
}

export default GenresService;
