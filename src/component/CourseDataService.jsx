import axios from 'axios';

const COURSE_API = 'http://localhost:8080';

class CourseDataService {

    retrieveAllCourses(){
        return axios.get(`${COURSE_API}/courseslist`);
    }
}

export default new CourseDataService();