import React from 'react'
import './Navbar.css'
import logo from '../../citylogo.png'

function Navbar() {
    return (
        <div>
          <nav className="nav-wrapper indigo darken-2">
              <div className="container">
                  <a href="/" className="brand-logo">
                      <img src={logo} alt="city tour logo" className="logo"/>
                  </a >
                  <a className="sidenav-trigger"  id="#" data-target="mobile-links">
                      <i className="material-icons">menu</i>
                  </a>
                  <ul className="right hide-on-med-and-down">
                      <li className="nav-li"><a  href="/">Home</a ></li>
                      <li className="nav-li"><a href="#about">About</a></li>
                      <li className="nav-li"><a href="#tours">Tours</a></li>
                  </ul>
              </div>
          </nav>
          <ul className="sidenav  indigo" id="mobile-links">
              <li className="side-li"><a  to="/">Home</a ></li>
              <li className="side-li"><a href="#about">About</a></li>
              <li className="side-li"><a href="#tours">Tours</a></li>
         </ul>
      </div>
    )
}

export default Navbar
