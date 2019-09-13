import React, { Component } from 'react';
import CourseDataService from './CourseDataService';


class ListCoursesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourse = this.refreshCourse.bind(this);
    }

    componentDidMount(){
        this.refreshCourse();
    }

    refreshCourse(){
        CourseDataService.retrieveAllCourses()
            .then(res => {
                console.log(res);
                this.setState({courses:res.data})
            });
    }
   
    render() { 
        return (  
            <React.Fragment>
                <div className="container">
                    <h3>All Courses</h3>
                    <div className="container">
                    <table className="table table-dark">
                        <thead>
                            <th>Id</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                            {
                            this.state.courses.map(
                                course => 
                            <tr>
                                <td>{course.id}</td>
                                <td>{course.description}</td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ListCoursesComponent;