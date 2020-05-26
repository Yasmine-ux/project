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
import Login2 from './Components/Login/login';
import Register2 from './Components/Register/register'
import RegisterServer from './Components/Register/registerserver';
import HomeHelp from './Components/Home/HomeHelp';
import ControlledOpenSelect from './Components/Dashboard/selects';
import Dashboard from './Components/Dashboard/dashboard'

function App() {
  return (
    <div>
      
    <Router>
         <Navmenu/>

              <Switch>
                  <Route exact path='/dashboard' component={Dashboard}/>
                  <Route exact path='/registerserver' component={RegisterServer}/>
                  <Route exact path='/register' component={Register2} />
                  <Route exact path='/home' component={HomePage} />
                  <Route Login2 exact path='/login' component={Login2}/>
                  <Route exact path='/gardenoutdoor' component={GardenOutdoor} />
                  <Route exact path='/homehelp' component={HomeHelp}/>
                  <Route exact path='/healthbeauty' component={HealthBeauty} />
                  <Route exact path='/plumbing' component={PlumServices} />
              </Switch>
              <Footer/>
        </Router>
        </div>
  );
}

export default App;
   

