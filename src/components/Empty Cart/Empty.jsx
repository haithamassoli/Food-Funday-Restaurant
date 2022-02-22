import React from 'react';
import { Link } from 'react-router-dom';
import './empty.css';
const Empty = () => {
    return ( <>
    <main className='empty-Container'>
        <img className="cart-img"  src="cart.png" alt="" />
        <h1 className='cart-notation'>Your Cart is Empty!</h1>
        <Link to ="/menu" > <button className='shop-btn'>Book Table </button> </Link>
    </main>
    </> );
}
 
export default Empty;