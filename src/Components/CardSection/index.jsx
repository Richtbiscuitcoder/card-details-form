import React from "react";
import bgDesktop from "../../assets/images/bg-main-desktop.png";

import "./styles.css";

const CardSection = () => {
  return (
    <div className="grid-container">
      <div className="bg-gradient"></div>
      <div className="card-front"></div>
      <div className="card-back"></div>
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
