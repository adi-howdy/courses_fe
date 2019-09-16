import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
//import { browserHistory, Router, Route } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';
import Cart from './Cart';

class InstructorApp extends Component {
    state = {  }
    render() { 
        return (
          
            <Router>
            <h1>Instructor Application</h1>
          <Switch>
                <Route path="/" exact component = {ListCoursesComponent}></Route>
                <Route path="/cart" exact component = {Cart}></Route>
                <Route path="/courses" exact component = {ListCoursesComponent}></Route>
                <Route path="/courses/:id" component = {CourseComponent}></Route>
            </Switch>
            </Router>
          
          );
    }
}
 
export default InstructorApp;