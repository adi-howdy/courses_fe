import React, { Component } from 'react';
import {Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

var styles={
    pickupsaving : {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
}

class PickupSaving extends Component {
    state = {  }
    render() { 
       const tooltip =  ( <Tooltip id="tooltip">
            <p> Save by picking up your order in Store</p>
       </Tooltip> );
        return (  
          
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickeupsaving}>Pickup Saving</div>
                        </OverlayTrigger>
                        <div style={styles.totalSavings}>{`$${this.props.price}`}</div>
                    
                </Col>
            </Row>
        );
    }
}
 
export default PickupSaving;