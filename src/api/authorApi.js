import axios from 'axios';

class AuthorApi {

    getAuthors() {
        const author = {firstName:'', lastName: ''};
        axios
            .get(`/api/authors`)
            .then(res => {
                return res;
            })
            .catch(() => {
                return author;
            });
    }
}

module.exports = new AuthorApi();