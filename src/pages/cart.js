import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount * item.price;
    });
    setPrice(total);
  }, [cart]); 

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <article>
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <div className="quantity">
              <button onClick={() => handleChange(item, -1)}> - </button>
              <span>{item.amount}</span>
              <button onClick={() => handleChange(item, +1)}> + </button>
            </div>
            <div>
              <span>Rs {item.price * item.amount}</span>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="total">
        <span>Total Price:</span>
        <span>Rs {price}</span>
      </div>
    </article>
  );
};
