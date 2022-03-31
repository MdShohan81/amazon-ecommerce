import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container container-fluid mt-4'>
            <div className="row">
            <div className="product-container col-md-9 col-sm-12">
            {
                           products.map(product => <Product handleAddToCart={handleAddToCart} product={product} key={product.id}></Product>)
                       }
            </div>
            {/* cart container  */}
            <div className="cart-container col-md-3 col-sm-12">
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;