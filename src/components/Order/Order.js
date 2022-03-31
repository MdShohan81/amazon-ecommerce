import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>This is order: {products.length}</h2>
            <p>THis is cart: {cart.length}</p>
        </div>

    );
};

export default Order;