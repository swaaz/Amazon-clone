import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
          <h1>
              Checkout(
              <Link to='/checkout'> {basket?.length} items</Link>
              )
          </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>K S Rao Road</p>
            <p>Mangaluru Post</p>
            <p>India</p>
          </div>
        </div>

        <div className="payment_section">
        <div className="payment_title">
            <h3>Review items and delivery</h3>
            </div> 
            <div className='payment_items'>
                {basket.map(items => (
                    <CheckoutProduct 
                    id={items.id}
                    image = {items.image}
                    title = {items.title}
                    price = {items.price}
                    rating = {items.rating}
                    />
                ))}
            </div>

        </div>

        <div className="payment_section">
        <div className="payment_title">
            <h3>Payment Method</h3>
            </div> 
            <div className='payment_details'>

            </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
