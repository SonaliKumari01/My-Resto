import React from 'react';
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Qualities from '../Components/Qualities';
import Menu from '../Components/Menu';
import WhoAreWe from '../Components/WhoAreWe';
import Team from '../Components/Team';
import Reservation from '../Components/Reservation';


const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
    </>
  );
};

export default Home;
