import React from 'react';
import './Item.css';
import '../../logo.svg';

export function Item({item}) {
    return(
        <article className="item">
            <img src={item.img} alt=""></img>
            <h3>{item.name}</h3>
            <p>{item.price}gp</p>
        </article>
    );
}