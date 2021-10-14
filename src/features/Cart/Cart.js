import React from "react";
import './Cart.css';
import { changeItemQuantity, selectCartItems } from "./cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

export function Cart(props) {

    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);

    const onInputChangeHandler = (name, input) => {
        if (input ==='') {
            return;
        }
        const newQuantity = Number(input);
        dispatch(changeItemQuantity(name, newQuantity));
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
        
      

    return(
        <div className="cart">
            <h3 className="cart-h3">Cart</h3>
            <ul>
              {cartElements}     
            </ul>
            <h3 className="cart-h3 total">Total: {total()} gold</h3>
        </div>
    );
}