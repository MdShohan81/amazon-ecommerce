import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='container order-container'>
            <div className="row">
                <div className="product-added-container col-md-8">
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product}>

                        </ReviewItem>)
                    }
                </div>
                <div className="product-order-container col-md-4 mt-5">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Order;