import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>the lean startup</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>19.8</strong>
                </p>
                <div className='product_rating'>
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/31WIKlBNDzL._SY355_.jpg' alt=''/>
        <button>Add to basket</button>
        </div>
    );
}
export default Product;
