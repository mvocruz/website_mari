import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Faq from './Pages/Faq';

function App() {
  return ( 
  <Router>

    <div className="App">
      <header className="App-header">
        <nav className="App-nav-bar">
          <div className="nav-logo">
          <Link to="/" className="nav-title">Brazilian Blowout</Link>
          </div>
          <div className="nav-menu">
            <Link to="/about" className="nav-about">About</Link>
            <Link to="/portfolio" className="nav-portfolio">Portfolio</Link>
            <Link to="/services" className="nav-services">Services</Link>
            <Link to="/contact" className="nav-contact">Contact</Link>
            <Link to="/faq" className="nav-faq">F.A.Q.</Link>
          </div>
        </nav>
      </header>  
      
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/faq" exact component={Faq}/>

      <footer className="App-footer">
        <h5>@ 2021 Brazilian Blowout</h5>
      </footer>
    </div>
  </Router>
  );
}

export default App;
