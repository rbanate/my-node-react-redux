import axios from 'axios';

class CourseApi {

    getAllCourses() {
        const author = {firstName:'', lastName: ''};
        return axios
            .get(`/api/courses`)
            .then(res => {
                //const [...coures] = res;
                return res;
            })
            .catch(() => {
                return author;
            });
    }
}

module.exports = new CourseApi();