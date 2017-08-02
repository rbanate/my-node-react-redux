import axios from 'axios';

class CourseApi {

    getAllCourses() {
        const author = {firstName:'', lastName: ''};
        return axios
            .get(`/api/courses`)
            .then(res => {
               return res.data;
            })
            .catch(() => {
                return author;
            });
    }
    
    saveCourse(){
        return axios
            .post(`/api/courses`)
            .then(res => {
                return res.data;
            });
    }
}

module.exports = new CourseApi();