import React from "react"
import "./styles.css"

const CardDetailsForm = () => {
  return (
    <div className="card-form-container">
      <form className="card-form" action="">
        <label htmlFor="cardholdername">CARDHOLDER NAME</label>
        <input
          type="text"
          className="card-input"
          id="cardholdername"
          name="cardholdername"
          placeholder="e.g. Jane Appleseed"
        />
        <label htmlFor="cardnumber">CARD NUMBER</label>
        <input
          type="text"
          className="card-input"
          id="cardnumber"
          name="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="exp-cvc-labels">
        <label className="exp-label" htmlFor="expiry">EXP. DATE (MM/YY)</label>
        <label className="cvc-label" htmlFor="cvc">CVC</label>
        </div>
        <div className="exp-cvc">
        <input className="exp-input" type="text" id="expiry" name="expiry" placeholder="MM" />
        <input className="exp-input" type="text" id="expiry" name="expiry" placeholder="YY" />
        <input type="text" id="cvc" name="cvc" placeholder="e.g. 123" />
        </div>
        <input className="confirm-button" type="submit" value="Confirm" />
      </form>
    </div>
  )
}

export default CardDetailsForm
