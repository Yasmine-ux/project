import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/footer/footer';
import SearchBar from './Components/searchBar/searchBar';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import SecondarySection from './Components/SecondarySection/SecondarySection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <SearchBar/>
      </header>
      <main>
        <ServicesSection/>
        <SecondarySection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
