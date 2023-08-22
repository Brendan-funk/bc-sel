import logo from './media/photos/BCSELLogo.png';
import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img className="logo" src={logo}/>
          <div className="links">
            <p>Home</p>
            <p>Schedule</p>
            <p>Leaderboards</p>
            <p>Contact Us</p>
          </div>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" Component={HomePage} />
        <Route path="/contact" Component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
