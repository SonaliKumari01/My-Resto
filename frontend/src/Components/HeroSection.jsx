import React from 'react';
import Navebar from './Navebar';

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navebar/>
  <div className="container">
    <div className="banner">
      <div className="largeBox">
        <h1 className="title">Delicious</h1>
      </div>
      <div className="imageBox">
        <img src="/hero1.png" alt="Pancakes" />
      </div>
      <div className="textWithSvg">
        <h1 className="title">Food</h1>
        <h1 className="title dishes_title">Dishes</h1>
        <img src="/threelines.svg" alt="Decoration" />
      </div>
      <img src="/logo.svg" alt="Logo" className="logo" />
    </div>

    <div className="banner">
      <div className="imageBox">
        <img src="/hero2.png" alt="Burger" />
      </div>
      <h1 className="title dishes_title">Dishes</h1>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
