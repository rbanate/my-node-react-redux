import axios from 'axios';

class AuthorApi {

    getAllAuthors() {
        const author = {firstName:'', lastName: ''};
        return axios
            .get(`/api/authors`)
            .then(res => {
                return res.data;
            })
            .catch(() => {
                return author;
            });
    }
        
}

module.exports = new AuthorApi();