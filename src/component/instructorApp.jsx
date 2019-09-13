import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';

class InstructorApp extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <h1>Instructor Application</h1>
            <ListCoursesComponent />
            </React.Fragment>
          );
    }
}
 
export default InstructorApp;