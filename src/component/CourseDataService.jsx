import axios from 'axios';

const COURSE_API = 'http://localhost:8080';

class CourseDataService {

    retrieveAllCourses(){
        return axios.get(`${COURSE_API}/courseslist`);
    }

    deleteCourse(id){
        return axios.delete(`${COURSE_API}/courseslist/${id}`);
    }

    retrieveCourse(id){
        return axios.get(`${COURSE_API}/courseslist/${id}`);
    }
}

export default new CourseDataService();