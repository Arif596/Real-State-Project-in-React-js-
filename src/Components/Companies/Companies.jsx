import React from "react";
import "./Companies.css";
import prologisPic from "/prologis.png";
import TowerPic from "/tower.png";
import EquinixPic from "/equinix.png";
import realtyPic from "/realty.png";

function Companies() {
  return (
    <section className="c-wrapper ">
      <div className="padding innerWidth flexCenter c-container">
        <img src={prologisPic} alt="prologisPic" />
        <img src={TowerPic} alt="TowerPic" />
        <img src={EquinixPic} alt="EquinixPic" />
        <img src={realtyPic} alt="realtyPic" />
      </div>
    </section>
  );
}

export default Companies;
