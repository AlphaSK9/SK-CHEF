import React from 'react';
import './Navbar.css';



const Navbar = ({ setCurrentCard }) => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
     S.Kaye Culinary
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a onClick={() => setCurrentCard('Card3')}>Chef Services</a>
      </li>
      <li>
        <a onClick={() => setCurrentCard('Card4')}>Event Catering</a>
      </li>
      <li>
        <a  onClick={() => setCurrentCard('Card5')}>Contact</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;
