import React, { Component } from 'react';
import {Button, Collapse, Well, Media, Row, Col, Form} from 'react-bootstrap';

class PromoCode extends Component {
    constructor(props){
        super(props);
        this.state= {
            open: false,
            value: ''
        }
    }
    render() { 
        return ( 
            <div>
            <Button className="items-details-button" onClick={()=> this.setState({open: !this.state.open})}>
                {this.state.open === false ? 'Apply' : 'Hide'} Promo Code
            </Button>
            <Collapse in={this.state.open}>
            <Form>
                <Form.Group controlId="promocode">
                    <Form.Label>
                        Enter Promo Code
                    </Form.Label>
                    <Form.Control type="text"  value={this.props.value} onChange={this.handleChange} placeholder= "Promo code here"/>
                </Form.Group>
                <Button type="submit" disabled={this.props.isDisabled} onClick={this.props.onSubmit}>Submit</Button>
            </Form>   
            </Collapse>
            </div>
         );
    }
}
 
export default PromoCode;