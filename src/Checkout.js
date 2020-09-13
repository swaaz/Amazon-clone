import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
               <div>
                   <h2 className='checkout_title'>Your shopping Basket</h2>
               </div>
            </div>
            <div className='checkout_right'>
                <h2>The subTotal will go</h2>
            </div>
        </div>
    )
}
export default Checkout;