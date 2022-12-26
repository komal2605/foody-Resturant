import React, { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-scroll";

import images from "../../constants/images";
import { Form } from "../../container";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();
  const [login, setLogin] = useState(false);
  const [bookTable, setBookTable] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.foody} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="home" spy={true} smooth={true} offset={-50} duration={100}>
            {"Home"}
          </Link>
        </li>
        <li className="p__opensans">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={400}>
            {"About"}
          </Link>
        </li>
        <li className="p__opensans">
          <Link to="menu" spy={true} smooth={true} offset={-100} duration={400}>
            {"Menu"}
          </Link>
        </li>
        <li className="p__opensans">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={400}
          >
            {"Contact"}
          </Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a
          href="#login"
          className={login ? "login-active p__opensans" : "p__opensans"}
          onClick={() => {
            setLogin(!login);
            setBookTable(false);
          }}
        >
          Log In/ Register
        </a>
        <div />
        <a
          href="#login"
          className={bookTable ? "login-active p__opensans" : "p__opensans"}
          onClick={() => {
            setBookTable(!bookTable);
            setLogin(false);
          }}
        >
          Book Table
        </a>
      </div>

      {login && <Form show={"loginForm"} />}
      {bookTable && <Form show={"dinning"} />}

      <div className="app__navbar-smallscreen">
        <MdOutlineRestaurantMenu
          color="var(--color-golden)"
          fontSize={27}
          onClick={() => {
            setToggleMenu(!toggleMenu);
            setLogin(false);
            setBookTable(false);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul
              className="app__navbar-smallscreen-links"
              onClick={() => {
                return setToggleMenu(false);
              }}
            >
              <li className="p__opensans">
                <a href="#home"> Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about"> About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu"> Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards"> Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact"> Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
