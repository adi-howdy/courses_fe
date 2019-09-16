import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class TaxesFees extends Component {
    state = {  }
    render() { 
        return ( 
            <Row className="show-grid">
                <Col md={6}> Estimated taxes</Col>
                <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
         );
    }
}
 
export default TaxesFees;