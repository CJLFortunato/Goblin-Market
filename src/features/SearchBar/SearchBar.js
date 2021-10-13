import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from './searchBarSlice';


export function SearchBar() {

    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };



   return (
        <div className="search-bar">
            <input type="text" 
            placeholder="Search for an item" 
            id="search-input"
            value={searchTerm}
            onChange={onSearchTermChangeHandler}
            />

            {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
        X
        </button>
      )}       
        </div>
   );
}