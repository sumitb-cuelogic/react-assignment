
import React, {Component} from 'react';
import Aux from '../../../Hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentWillUpdate()
    {
        console.log('[orderSummary] will update')
    }

    render()
    {

        const IngredientSummary=Object.keys(this.props.ingredient)
                                .map(igkey =>{
                                return (
                                    <li key={igkey}> 
                                        <span style={{textTransform :'capitalize'}}>{igkey}</span> : {this.props.ingredient[igkey]}
                                    </li>
                                );
                                });


        return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with following Ingredients : </p>
            <ul>
                {IngredientSummary}
            </ul>   
            <p>Total Price : {this.props.totalPrice.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
         </Aux>


        );
    }
} 

export default OrderSummary;