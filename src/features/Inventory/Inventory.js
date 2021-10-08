import React from 'react';
import { Item } from '../Item/Item.js';
import './Inventory.css';

export function Inventory() {
    return(
        <div className="inventory">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}