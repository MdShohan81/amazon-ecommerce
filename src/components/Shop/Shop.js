import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/UseProducts';
import {  useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

   

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(productItem => productItem.id === product.id);
       if(!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }else{
            const rest = cart.filter(productItem => productItem.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container container-fluid mt-4'>
            <div className="row">
            <div className="product-container col-md-9">
            {
                           products.map(product => <Product handleAddToCart={handleAddToCart} product={product} key={product.id}></Product>)
                       }
            </div>
            {/* cart container  */}
            <div className="cart-container col-md-3">
                <Cart cart={cart}>
                       
                            <button onClick={()=> navigate('/orders')} className='btn btn-success'>Review Order
                            <span className='ps-2 fs-'><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></span>
                            </button>
                       
                </Cart>
            </div>
            </div>
        </div>
    );
};

export default Shop;