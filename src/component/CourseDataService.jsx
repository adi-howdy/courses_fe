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

    updateCourse(id, course){
        return axios.put(`${COURSE_API}/courseslist/${id}`, course);
    }

    createCourse(course){
        console.log("course: " + course);
        return axios.post(`${COURSE_API}/courseslist/`, course);
    }
}

export default new CourseDataService();