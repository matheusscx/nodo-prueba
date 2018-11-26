import React from 'react';
import logo from '../static/logo.png';

const Header = ({ children }) => (
  <header className="text-center text-light bg-dark shadow">
    <img className="img-fluid" src={logo} width="400" height="100" alt="logo"/>
  </header>
)

export default Header;