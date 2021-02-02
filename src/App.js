import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Faq from './Pages/Faq';
import Login from './Pages/Login';

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
            <Button component={Link} to="/login" className="nav-login" variant="outlined">Login</Button>
            
          </div>
        </nav>
      </header>  

          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/faq" exact component={Faq}/>
          <Route path="/login" exact component={Login}/>

      <footer className="App-footer">
      <div className='app-footer-social'>
        <div className='app-footer-social-box'>
          <div className='app-footer-icon-instagram'>
            <i class="fab fa-instagram fa-2x"></i>
          </div>
          <div className='app-footer-icon-facebook'>
            <i class="fab fa-facebook fa-2x"></i>
          </div>
        </div>
        <div className='app-footer-link-box'>
          <Link to="/" className="footer-home">Home</Link>
          <Link to="/about" className="footer-about">About</Link>
          <Link to="/portfolio" className="footer-portfolio">Portfolio</Link>
          <Link to="/services" className="footer-services">Services</Link>
          <Link to="/contact" className="footer-contact">Contact</Link>
          <Link to="/faq" className="footer-faq">F.A.Q.</Link>
        </div>
      </div>
        <text style={{paddingTop:50}}>@ 2021 Brazilian Blowout</text>
      </footer>
    </div>
  </Router>
  );
}

export default App;
