import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

class EstimatedTotal extends Component {
    state = {  }
    render() { 
        return ( 
            <Row className="show-grid">
                <Col md={6}>Est. Total</Col>
                <Col md={6}>{`$${this.props.total}`}</Col>
            </Row>
         );
    }
}
 
export default EstimatedTotal;