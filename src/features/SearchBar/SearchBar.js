import React, { useState } from 'react';
import './SearchBar.css';


export function SearchBar() {
   return (
        <div className="search-bar">
            <input type="text" placeholder="Search for an item" id="search-input"></input>
            <button id="search-btn">Search</button>
        </div>
   );
}