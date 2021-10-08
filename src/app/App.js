import React from 'react';
import './App.css';
import { SearchBar } from '../features/SearchBar/SearchBar.js';
import { Inventory } from '../features/Inventory/Inventory.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Goblin Market</h1>
        <SearchBar />
      </header>
      <main>
        <Inventory />
      </main>
    </div>
  );
}

export default App;
