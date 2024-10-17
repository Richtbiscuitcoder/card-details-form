import React from "react"
import bgDesktop from "../../assets/images/bg-main-desktop.png"

import "./styles.css"

const CardSection = ({ name, cardNumber, month, year, cvc }) => {
  return (
    <div className="grid-container">
      <div className="bg-gradient"></div>
      <div className="card-front">
        <div className="white-ball"></div>
        <div className="hollow-ball"></div>
        <div className="details-container">
          <p className="card-num">{cardNumber}</p>
          <div className="name-exp">
            <p>{name}</p>
            <p>{month}/{year}</p>
          </div>
        </div>
      </div>
      <div className="card-back">
        <p className="csv">{cvc}</p>
      </div>
    </div>
  )

}

export default CardSection
