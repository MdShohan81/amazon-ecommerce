import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name,price,quantity,shipping,img} = props.product;
    return (
        <div className='mt-5 row'>
            <div className='py-2  order-card col-md-10'>
                <div>
                    <img src={img} alt="img" />
                </div>
                <div className='review-cart-details ps-3'>
                    <h4>{name}</h4>
                    <p>Price: <span className='text-danger'>${price}</span></p>
                    <p>quantity: <span className='text-danger'>{quantity}</span></p>
                    <p>Shipping Charge: <span className='text-danger'>${shipping}</span></p>
                </div>
                <div className='ms-auto'>
                
                    <button className='btn btn-outline-danger'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;