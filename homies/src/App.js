import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/navbar';
import SearchBar from './Components/searchBar/searchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <SearchBar/>
      </header>
    </div>
  );
}

export default App;
