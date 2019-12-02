import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './scss/NavBar.scss'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
     <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link"><img className="logo" src="logo.png"></img></Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default NavBar;