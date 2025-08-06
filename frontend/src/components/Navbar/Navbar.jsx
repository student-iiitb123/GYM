import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav>
      <div>
        <img onClick={() => navigate('/home')} src='logo.png' alt='logo' />
      </div>
      <ul>
        {/* <Link to="/">Home</Link> */}
        {/* <li><a href="/classes">About Us</a></li> */}
        {/* <li><a href="/trainer">Trainers</a></li> */}
        {/* <li><a href="/membership">Membership</a></li> */}
        {/* <li><a href="/contact">Contact</a></li> */}
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/classes">About Us</Link></li>
        <li><Link to="/trainer">Trainer</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/Contact">Contact</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
