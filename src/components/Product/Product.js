import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <div className="card">
            <img src={img} className="ps-2 mt-2 img-fluid"  alt="" />
            <div className="card-body">
                <span className='text-size'><small>{name}</small></span>
                <p className="card-text">Seller:{seller}</p>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings}</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn btn-danger   w-100'>
                    Add to cart
                    <span className='ps-3'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
                </button>
            </div>
            </div>   
        </div>
    );
};

export default Product;