import React from 'react';
import './Hero.css';  // Make sure to create this file

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="Gym.jpg" // replace with your image path or URL
        alt="Gym Workout"
        className="hero-image"
      />
     <div className="hero-overlay">
  <h1>
    <span className="highlight">Transform</span> Your <br />
    Body & Mind
  </h1>
  <p>Join our community and start your fitness journey today</p>
  <button>Join Now</button>
</div>
    </section>
  );
};

export default Hero;



