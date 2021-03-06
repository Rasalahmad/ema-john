import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props)
    const {name, img, price, stock, seller, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = 'product'>
            <div>
                 <img src={img} alt="" />    
            </div>
            <div>
                <h4 className = 'product-name'>Product: {name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - order soom</small></p>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                ></Rating>
                <br />
                <button onClick = { () => props.handleAddToCart(props.product)} className = 'btn-regular'>{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;