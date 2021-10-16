import React from 'react';
import './Item.css';
import { addItem } from '../Cart/cartSlice.js';
import { useDispatch } from 'react-redux';

export function Item({item}) {

    const dispatch = useDispatch();

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
      };

    return(
        <article className="item">
            <h3 className="item-title">{item.name}</h3>
            <img src={item.img.default} alt=""></img>
            <p className="price">{item.price}gp</p>
            <button id="add-cart-btn" onClick={() => onClickHandler(item)}>Add to Cart</button>
        </article>
    );
}