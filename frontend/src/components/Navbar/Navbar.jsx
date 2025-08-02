import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src='logo.png' alt='logo' />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
