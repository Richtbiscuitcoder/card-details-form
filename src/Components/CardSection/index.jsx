import React from "react";
import bgDesktop from "../../assets/images/bg-main-desktop.png";

import "./styles.css";

const CardSection = () => {
  return (
    <div className="grid-container">
      <div className="bg-gradient"></div>
      <div className="card-front">
        <div className="white-ball"></div>
        <div className="hollow-ball"></div>
        <div className="details-container">
          <p className="card-num">0000 0000 0000 0000</p>
          <div className="name-exp">
            <p>Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
      </div>
      <div className="card-back">
        <p className="csv">000</p>
      </div>
    </div>
  );

  // return (
  // <div className="border-box">
  //     <img src={bgDesktop} alt="background color gradient" className="background" />
  //     <div className="card-front">

  //         <div className="white-ball"></div>
  //         <div className="hollow-ball"></div>
  //     </div>
  //     <div className="card-back">

  //     </div>
  // </div>)
};

export default CardSection;

