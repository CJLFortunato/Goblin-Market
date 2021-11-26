import React from "react";
import './Cart.css';
import { changeItemQuantity, removeItem, selectCartItems } from "./cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

export function Cart({closeFunc}) {

    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);

    const onInputChangeHandler = (name, input) => {
        if (input ==='') {
            return;
        }
        const newQuantity = Number(input);
        dispatch(changeItemQuantity(name, newQuantity));
    }

    const onRemoveHandler = (name) => {
      const payload = { name, ...cart[name]};
      dispatch(removeItem(payload));
      console.log("Event detected");
    }

    function createCartItem(name) {
        const item = cart[name];
    
        if (item.quantity === 0) {
          return;
        }
    
        return (
          <li key={name} className="cart-item">
            <p className="cart-p">{name}</p>
            <select
              className="item-quantity"
              value={item.quantity}
              onChange={(e) => {
                onInputChangeHandler(name, e.target.value);
              }}
            >
              {[...Array(100).keys()].map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
            <button id="cart-item-delete-btn" onClick={() => onRemoveHandler(name)}>X</button>
          </li>
        );
      }

      const cartElements = Object.keys(cart).map(createCartItem);

      const total = function() {
        let sum = 0;
        Object.keys(cart).forEach((item) => {
            sum += cart[item].price * cart[item].quantity;
            });
            return sum ? sum : 0;
      };
        
      const onClose = function() {
        closeFunc(false);
    };

    return(
        <div className="cart">
            <button id="cart-close" onClick={onClose}>X</button>
            <h3 className="cart-h3 menu-h3" id="cart-title">Cart</h3>
            <ul>
              {cartElements}     
            </ul>
            <h3 className="cart-h3 total menu-h3">Total: {total()}Œ</h3>
            <button class="pay-btn">Proceed to payment</button>
        </div>
    );
}