import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navebar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">My-Restro</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <Link
              to={element.link}
              key={element.id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setShow(false)} // closes menu after click
            >
              {element.title}
            </Link>
          ))}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu size={24} />
      </div>
    </nav>
  );
};

export default Navebar;
