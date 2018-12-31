import React from 'react';
import {formatPrice } from '../helpers';

class Order extends React.Component {
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key)=>{
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            if(isAvailable){
                return prevTotal + fish.price * count;                
            }
            return prevTotal;
        }, 0);

        const displayOrder = orderIds.map(key => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish.status === "available";
            if(!isAvailable){
                return(
                <li key={key}>
                    Sorry, {fish ? fish.name : 'fish'} is no longer available.
                </li>
                );
            } 
            return (
                <li key={key}>
                    {count} x {isAvailable ? fish.name : "fish"}
                    {formatPrice(count * fish.price)}
                </li>
            );
            
        });
        
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                {displayOrder}
                </ul>
                
                <div className="total"><strong>Total: {formatPrice(total)}</strong></div>
            </div>
        )
        
    }
}

export default Order;