import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home </a>
    </p>
    <p>
      <a href="#whpt3">What is GPT3? </a>
    </p>
    <p>
      <a href="#possibility">Open AI </a>
    </p>
    <p>
      <a href="#features">Case Studies </a>
    </p>
    <p>
      <a href="#blog">Library </a>
    </p>
  </>
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarLinks">
        <div className="navbarLinksLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbarLinksContainer">
          <Menu />
        </div>
      </div>
      <div className="navbarSign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbarMenu">
        {openMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setOpenMenu(true)}
          />
        )}
        {openMenu && (
          <div className="navbarMenuContainer scale-up-center">
            <div className="navbarMenuContainerLinks">
              <Menu />
              <div className="navbarMenuContainerLinksSign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
