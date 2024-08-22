import React from "react";
import bgDesktop from "../../assets/images/bg-main-desktop.png";
import cardFront from "../../assets/images/bg-card-front.png";
import cardBack from "../../assets/images/bg-card-back.png";
import "./styles.css";

const CardSection = () => {

    return (
    <>
        <img src={bgDesktop} alt="background color gradient" className="background" />
        
            <img src={cardFront} alt="background color gradient" className="card-front"/>
            <img src={cardBack} alt="background color gradient" className="card-back"/>
        
    </>)
}


export default CardSection;