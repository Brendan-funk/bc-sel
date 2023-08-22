import logo from './media/photos/BCSELLogo.png';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage.js';
import ContactUs from './pages/ContactUs.js';
import Standings from './pages/Standings.js';
import Schedule from './pages/Schedule.js';
import { Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <nav>
          <img className="logo" src={logo}/>
          <div className="links">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/schedule">Schedule</Link>
            </p>
            <p>
              <Link to="/standings"> Standings </Link>
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
        </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/standings" element={<Standings />} />
            <Route path='/schedule' element={<Schedule />} />
          </Routes>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
