import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
   
    let subtotal = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        subtotal = subtotal + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((subtotal * 0.1).toFixed(2));
    const total = subtotal + shipping + tax;

    return (
        <div className='pt-5 cart'>
            <h3 className="mb-3"><span className="border-bottom border-danger border-3 ">Order Summary</span></h3>
            <h4>Select Item: {quantity}</h4>
            <p><b>SubTotal Price: ${subtotal}</b></p>
            <p><b> Shipping Fee: ${shipping}</b></p>
            <p><b>Tax: ${tax}</b></p>
            <p><b>Total: ${total}</b></p>
            {props.children}
        </div>
    );
};

export default Cart;