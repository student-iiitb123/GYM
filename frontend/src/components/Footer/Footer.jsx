import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h3>FitHub</h3>
          <p>Your fitness journey starts here. Track, train, and transform.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/workouts">Workouts</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: support@fithub.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <div>
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div>
        &copy; 2025 FitHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
