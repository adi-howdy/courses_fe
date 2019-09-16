import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubTotal from './SubTotal/SubTotal';
import PickupSaving from './SubTotal/PickupSaving';
import TaxesFees from './SubTotal/TaxesFees';
import EstimatedTotal from './SubTotal/EstimatedTotal';
import ItemDetails from './SubTotal/ItemDetails';
import PromoCode from   './SubTotal/PromoCode';

class cart extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            total: 100,
            price: -3.85,
            taxes: 0,
            EstimatedTotal: 0,
            itemPrice: 10,
            qty: 1,
            isDisabled: false,
            value: 'abcd'
        };     
    }

    componentDidMount()  {
        this.setState({
            taxes : (this.state.total +this.state.price)*0.056
        },
        function(){
        this.setState({
            EstimatedTotal : this.state.total+ this.state.price + this.state.taxes
        })
    }
        )
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Container className="purchase-card">
                <SubTotal price={this.state.total.toFixed(2)}/>
                <PickupSaving price={this.state.price}/>
                <TaxesFees taxes={this.state.taxes}/>
                <EstimatedTotal total={this.state.EstimatedTotal}/>
                <hr />
                <ItemDetails price={this.state.itemPrice} qty={this.state.qty}/>
                <hr />
                <PromoCode isSubmit={()=> this.giveDiscountHandler()}
                    isDisabled={this.state.isDisabled}
                />
                </Container>
            </React.Fragment>
         );
    }
}
 
export default cart;