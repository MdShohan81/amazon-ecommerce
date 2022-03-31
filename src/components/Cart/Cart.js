import React from 'react';

const Cart = (props) => {
    const {cart} = props
    return (
        <div className='p-2'>
            <h3>Order Summary</h3>
            <h4>Select Item: {cart.length}</h4>
        </div>
    );
};

export default Cart;