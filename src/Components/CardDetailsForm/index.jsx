import React from "react"
import "./styles.css"

const CardDetailsForm = ({ setName, setCardNumber }) => {
  function handleNameInput(e) {
    setName(e.target.value.toUpperCase())
    let input = e.target.value.toUpperCase()
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/

    if (!regName.test(input)) {
      document.querySelector(".alert").classList.add("active")
      e.target.focus()
      return false
    }
    else {
      document.querySelector(".alert").classList.remove("active")
      return true
    }
  }

  function handleCardNumberInput(e) {
    setCardNumber(e.target.value)
    let input = e.target.value
    var regCard = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/

    if (!regCard.test(input)) {
      document.querySelector(".alert").classList.add("active")
      e.target.focus()
      console.log(false)
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
         <p className="alert">
          <small>Please enter your full name (first & last name).</small>
        </p>
        <label htmlFor="cardnumber">CARD NUMBER</label>
        <input
          onChange={handleCardNumberInput}          type="text"
          className="card-input"
          id="cardnumber"
          name="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
        <p className="alert">
          <small>Please enter your full name (first & last name).</small>
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
