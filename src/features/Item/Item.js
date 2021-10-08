import React from 'react';
import './Item.css';
import '../../logo.svg';

export function Item() {
    return(
        <article className="item">
            <img src="../../logo.svg"></img>
            <h3>Item name</h3>
            <p>Price</p>
        </article>
    );
}