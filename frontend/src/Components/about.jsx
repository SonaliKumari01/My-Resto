import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <article className="banner">
          <header className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </header>
          <p className="mid">
            At our core, we believe that food should be joyful, memorable, and above all—delicious. 
            Whether it's a casual bite or a full-course experience, we craft every dish with passion 
            and purpose. Join us on a journey where flavors tell stories and meals become memories.
          </p>
          <Link to="/" className="btn" aria-label="Explore our menu">
            Explore Menu{" "}
            <span>
             <HiOutlineArrowNarrowRight />
             </span>
            </Link>

        </article>
        <figure className="banner">
          <img src="/about.png" alt="Chef preparing food in kitchen" />
        </figure>
      </div>
    </section>
  )
}
export default About;