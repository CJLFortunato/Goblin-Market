import React from 'react';
import './Item.css';
import '../../logo.svg';

export function Item({item}) {
    return(
        <article className="item">
            <img src={item.img.default} alt=""></img>
            <h3 className="item-title">{item.name}</h3>
            <p>{item.price}gp</p>
        </article>
    );
}