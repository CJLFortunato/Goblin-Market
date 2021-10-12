import React from "react";
import './Cart.css';

export function Cart() {
    return(
        <div className="cart">
            <h3 className="cart-h3">Cart</h3>
            <ul>
              <li className="cart-item">Item 1 <input type="number" placeholder="1"></input></li>
              <li className="cart-item">Item 2 <input type="number" placeholder="1"></input></li>  
              <li className="cart-item">Item 3 <input type="number" placeholder="1"></input></li>     
            </ul>
            <h3 className="cart-h3 total">Total: 820 gp</h3>
        </div>
    );
}