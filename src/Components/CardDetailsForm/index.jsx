
import React, { useState, useEffect } from 'react';
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

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    useEffect(() => {
      validateExpiry();
      
    }, [month, year]);
  
    const validateExpiry = () => {
      if (month.length === 2 && year.length === 2) {
        let expiryString = `${month}/${year}`;
        if (!/^\d{2}\/\d{2}$/.test(expiryString)) {
        const currentDate = new Date();
        const expiryDate = new Date(
          parseInt(`20${year}, 10`),
          parseInt(month, 10) - 1, 1
        );
        setIsValid(expiryDate > currentDate);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
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
          maxLength="16"
        />
        <p className="alert-number">
          <small>Please add a valid 16 digit card number.</small>
        </p>
        <div className="exp-cvc-labels">
          <label className="exp-label" htmlFor="expiryMM">
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
            id="expiryMM"
            name="expiryMM"
            placeholder="MM"
            onChange={(e) => setMonth(e.target.value)}
            maxLength="2"
            required
          />
          <label htmlFor="expiryYY"></label>
          <input
            className="exp-input"
            type="text"
            id="expiryYY"
            name="expiryYY"
            placeholder="YY"
            onChange={(e) => setYear(e.target.value)}
            maxLength="2"
            required
          />
          
          <input type="text" id="cvc" name="cvc" placeholder="e.g. 123" maxLength="3" required />
        </div>

          <div>
            {!isValid ?  (
              <p className="alert-expiry active">Expiry date must be in the future</p>
            ) : null}
            
          </div>
        <input className="confirm-button" type="submit" value="Confirm" />
      </form>
    </div>
    )
  }


export default CardDetailsForm