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
    render() { 
        let { description, id } = this.state
        return ( 
            <div>
                
                <h1>Course Details</h1>
                
                <div className="container">
                    <Formik initialValues> {
                        (props)=>(
                            <Form>
                                <fieldset className="form-group">
                                    <label htmlFor="">Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label htmlFor="">Description</label>
                                    <Field className="form-control" type="text" name="description"  />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }>

                    </Formik>
                </div>
            </div>
            );
    }
}
 
export default CourseComponent;