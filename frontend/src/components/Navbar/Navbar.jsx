import React from 'react';
import './Navbar.css';
// import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src='logo.png' alt='logo' />
      </div>
      <ul>
        {/* <Link to="/">Home</Link> */}
        <li><a href="/home">Home</a></li>
        {/* <li><Link to="/">Home</Link></li> */}
        <li><a href="/classes">About Us</a></li>
        <li><a href="/trainer">Trainers</a></li>
        <li><a href="/membership">Membership</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
