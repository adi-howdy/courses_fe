import React, { Component } from 'react';
import CourseDataService from './CourseDataService';
import { Formik, Field, Form } from 'formik';

class CourseComponent extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            description: ''
        }
        this.Onchange = this.Onchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.state.id);
        CourseDataService.retrieveCourse(this.state.id)
            .then(res => this.setState({
                description : res.data.description
            })
            )
            console.log('desc' + this.state.description);
    }

    Onchange(event){
        this.setState({description: event.target.value});
    }

    onSubmit(values){
        let course = {
            id: this.state.id,
            description: this.state.description
        }
        
        if(this.state.id === -1){
            CourseDataService.createCourse(course)
                .then(()=> this.state.history.push('/courses'));
        }else{
        CourseDataService.updateCourse(this.state.id,course)
            .then(()=> this.state.history.push('/courses'));
        }
            console.log('values: ' + values);
    }
    render() { 
        let { description, id } = this.state
        return ( 
            <div>
                
                <h1>Course Details</h1>
                
                <div className="container">
                            <form onSubmit={this.onSubmit}>
                                <label>Id</label>
                                <input type="text" value={this.state.id} onChange={this.Onchange} />
                                <label htmlFor="">Description</label>
                                <input type="text" value={this.state.description} onChange={this.Onchange}/>
                                <button className="btn btn-success" type="submit" >Save</button>
                            </form>
                </div>
            </div>
            );
    }
}
 
export default CourseComponent;