import React, { useState } from "react";
import LogoPic from "/logo.png";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const getMneuStyle = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !openMenu && "-100%",
      };
    }
  };
  return (
    <div>
      <section className="h-Wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src={LogoPic} alt="logo" width={100} />
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenMenu(false);
            }}
          >
            <div className=" flexCenter h-menu" style={getMneuStyle(openMenu)}>
              <a href="">Residencies</a>
              <a href="">Our Value</a>
              <a href="">Contact Us</a>
              <a href="">Get Started</a>
              <button className="button">
                <a href="">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
