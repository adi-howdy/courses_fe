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
        this.deleteCourse = this.deleteCourse.bind(this);
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

    deleteCourse(id){
        CourseDataService.deleteCourse(id)
            .then(res=>
                {
                    this.setState({message: `Delete of course ${id} sucessful`});
                    this.refreshCourse();
                })
    }
   
    render() { 
        return (  
            <React.Fragment>
                <div className="container">
                    <h3>All Courses</h3>
                    {this.state.message && <div className ="alert alert-success">{this.state.message}</div>}
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
                                <td><button className="btn btn-info" onClick={()=> this.deleteCourse(course.id)}>Delete</button></td>
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