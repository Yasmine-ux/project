import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import HomePage from './Components/HomePage/HomePage';
import GardenOutdoor from './Components/GardenOutdoor/GardenOutdoor';
import HealthBeauty from './Components/HealthBeauty/HealthBeauty';
import PlumServices from './Components/PlumbinPainting/PlumServices';
import Navmenu from './Components/Navbar/navbar';
import Footer from './Components/footer/footer';


function App() {
  return (
    <div>
    <Router>
         <Navmenu/>
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/gardenoutdoor' component={GardenOutdoor} />
                  <Route exact path='/healthbeauty' component={HealthBeauty} />
                  <Route exact path='/plumbing' component={PlumServices} />
              </Switch>
              <Footer/>
        </Router>
        </div>
  );
}

export default App;
