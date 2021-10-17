import React, { useEffect } from 'react';
import { Item } from '../Item/Item.js';
import './Inventory.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredItems, loadData } from './inventorySlice.js';
import { store } from '../../app/store.js';

export function Inventory() {

    const allItems = useSelector(selectFilteredItems);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    };
    useEffect(onFirstRender, [dispatch]);

    
    console.log(store.getState());

    return(
        <div className="inventory">
            {allItems.map((item, index) => (
                <Item item={item} key={index}/>
            ))}
        </div>
    );
}