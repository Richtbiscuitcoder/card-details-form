import React from "react"
import "./styles.css"

const CardDetailsForm = ({ setName, setCardNumber }) => {
  function handleNameInput(e) {
    setName(e.target.value.toUpperCase())
    let input = e.target.value.toUpperCase()
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/

    if (!regName.test(input)) {
      document.querySelector(".alert-name").classList.add("active")
      e.target.focus()
      return false
    }
    else {
      document.querySelector(".alert-name").classList.remove("active")
      return true
    }
  }

  function handleCardNumberInput(e) {
    let cardNumber = e.target.value
        .replace(/[^\d]/g, '')
         .slice(0, 16)
         .replace(/(\d{4})/g, '$1 ')
         .trim();
    setCardNumber(cardNumber)
    var regCard = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/

    if (!regCard.test(cardNumber)) {
      document.querySelector(".alert-number").classList.add("active")
      e.target.focus()
      console.log(false)
    }
    else {
      document.querySelector(".alert-number").classList.remove("active")
      return true
    }

  }

  return (
    <div className="card-form-container">
      <form className="card-form" action="">
        <label htmlFor="cardholdername">CARDHOLDER NAME</label>
        <input
          onChange={handleNameInput}
          type="text"
          className="card-input"
          id="cardholdername"
          name="cardholdername"
          placeholder="e.g. Jane Appleseed"
          required
        />
         <p className="alert-name">
          <small>Please enter your full name (first & last name).</small>
        </p>
        <label htmlFor="cardnumber">CARD NUMBER</label>
        <input
          onChange={handleCardNumberInput}          
          type="text"
          className="card-input"
          id="cardnumber"
          name="cardnumber"
          format="#### #### #### ####"
          placeholder="e.g. 1234 5678 9123 0000"
          required
          maxlength="16"
        />
        <p className="alert-number">
          <small>Please add a valid 16 digit card number.</small>
        </p>
        <div className="exp-cvc-labels">
          <label className="exp-label" htmlFor="expiry">
            EXP. DATE (MM/YY)
          </label>
          <label className="cvc-label" htmlFor="cvc">
            CVC
          </label>
        </div>
        <div className="exp-cvc">
          <input
            className="exp-input"
            type="text"
            id="expiry"
            name="expiry"
            placeholder="MM"
            required
          />
          <input
            className="exp-input"
            type="text"
            id="expiry"
            name="expiry"
            placeholder="YY"
            required
          />
          <input type="text" id="cvc" name="cvc" placeholder="e.g. 123" required />
        </div>
        <input className="confirm-button" type="submit" value="Confirm" />
      </form>
    </div>
  )
}

export default CardDetailsForm
