import React, { useEffect } from 'react';
import { Item } from '../Item/Item.js';
import './Inventory.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllitems, loadData } from './inventorySlice.js';
import { store } from '../../app/store.js';

export function Inventory() {

    const allItems = useSelector(selectAllitems);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    };
    useEffect(onFirstRender, []);

    
    console.log(store.getState());

    return(
        <div className="inventory">
            {allItems.map((item, index) => (
                <Item item={item} key={index}/>
            ))}
        </div>
    );
}