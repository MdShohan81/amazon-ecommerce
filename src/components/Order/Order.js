import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const rest = cart.filter(productOrder => productOrder.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='container order-container'>
            <div className="row">
                <div className="product-added-container col-md-8">
                    {
                        cart.map(product => <ReviewItem 
                        key={product.id} 
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                        >

                        </ReviewItem>)
                    }
                </div>
                <div className="product-order-container col-md-4 mt-5">
                    <Cart cart={cart}>
                        
                            <button onClick={()=> navigate('/')} className='btn btn-success'>Check Out <span className='ps-2 fs-'><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></span> </button>
                        
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Order;