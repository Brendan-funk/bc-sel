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
              <Link to="/"><button>Home</button></Link>
              <Link to="/schedule"><button>Schedule</button></Link>
              <Link to="/standings"><button>Standings</button></Link>
              <Link to="/contact"><button>Contact Us</button></Link>
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
