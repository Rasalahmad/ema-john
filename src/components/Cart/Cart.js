import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    // console.log(props)
    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0); */
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        // product.quantity = !product.quantity ? 1 : product.quantity
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    } 
    const shipping = total > 0 ? 15 : 0;
    const tax = (shipping + total) / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div className = 'cart-body'>
            <div className = 'cart-header'>
                <h2>Order Summary</h2>
                <p>Items Ordered: {totalQuantity}</p>
            </div>
          <div className = 'cart-calc'>
                <div>
                    <p>Total: {total.toFixed(2)}</p>
                    <p>Shipping: {shipping.toFixed(2)}</p>
                    <p>Tax: {tax.toFixed(2)}</p>
                    <p>GrandTotal: {grandTotal.toFixed(2)}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Cart;