import React, { useState } from 'react';
import './App.css';
import { SearchBar } from '../features/SearchBar/SearchBar.js';
import { Inventory } from '../features/Inventory/Inventory.js';
import { CategoriesMenu } from '../features/CategoriesMenu/CategoriesMenu.js';
import { Cart } from '../features/Cart/Cart.js';

function App() {

  const [categMenuToggleSlideIn, setCategMenuToggleSlideIn] = useState(false);
  const [cartMenuToggleSlideIn, setCartMenuToggleSlideIn] = useState(false);

  const handleMenuBtnClick = function() {
    setCategMenuToggleSlideIn(!categMenuToggleSlideIn);
    console.log(categMenuToggleSlideIn);
  }
  const handleCartBtnClick = function() {
    setCartMenuToggleSlideIn(!cartMenuToggleSlideIn);
    console.log(cartMenuToggleSlideIn);
  }


 const categoriesMenuSlideIn = function() {
   if (!categMenuToggleSlideIn) {
     return;
  } 
  return (<CategoriesMenu />);
  
 }

 const cartMenuSlideIn = function() {
  if (!cartMenuToggleSlideIn) {
    return;
 } 
  return (<Cart />);
 
}



  return (
    <div className="App">
      <header className="App-header">
        <button id="menu-btn" onClick={handleMenuBtnClick}><i class="fas fa-bars"></i></button>
        <h1>Goblin Market</h1>
        <SearchBar />
        <button id="cart-btn" onClick={handleCartBtnClick}><i class="fas fa-shopping-cart"></i></button>
      </header>
      <main>
        {categoriesMenuSlideIn()}
        {cartMenuSlideIn()}
        <Inventory />
       
      </main>
    </div>
  );
}

export default App;
