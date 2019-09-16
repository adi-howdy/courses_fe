import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class SubTotal extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Row className="show-grid">
                <Col md={6}>Sub Total</Col>
                <Col md={6}>{`$${this.props.price}`}</Col>
            </Row>
            </React.Fragment>
         );
    }
}
 
export default SubTotal;