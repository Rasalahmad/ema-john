import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    /* let total = 0;
    for(const product of cart){
        total = total + product.price;
    }  */
    const shipping = 15;
    const tax = (shipping + total) / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div className = 'cart-body'>
            <div className = 'cart-header'>
                <h2>Order Summary</h2>
                <p>Items Ordered: {props.cart.length}</p>
            </div>
          <div className = 'cart-calc'>
                <div>
                    <p>Total</p>
                    <p>Shipping</p>
                    <p>Tax</p>
                    <p>GrandTotal</p>
                </div>
                <div>
                    <p>{total.toFixed(2)}</p>
                    <p>{shipping.toFixed(2)}</p>
                    <p>{tax.toFixed(2)}</p>
                    <p>{grandTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;