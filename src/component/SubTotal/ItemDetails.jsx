import React, { Component } from 'react';
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

class ItemDetails extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false
        }
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Button className="items-details-button" onClick={()=> this.setState({
                    open: !this.state.open
                })}>
                  {this.state.open === false ? 'See' : 'Hide '} item Details
                  {this.state.open === false ? '+': '-'}  
                </Button>
                <Collapse in={this.state.open}>
                       <Media>
                            <img width={100} alt="toothbrush" src="https://i5.walmartimages.ca/images/Enlarge/088/574/6000198088574.jpg"/>
                        <Media.Body>                            
                        <h5>Electric Toothbrush</h5>
                        <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. 
                        </p>
                        <Row>
                            <Col md={6} style={{fontWeight: 800}}>{`$${this.props.price}`}</Col>
                            <Col md={6}>Qty: {`${this.props.qty}`}</Col>
                        </Row>
                        </Media.Body>
                    </Media>
                    
                </Collapse>
            </div>
         );
    }
}
 
export default ItemDetails;