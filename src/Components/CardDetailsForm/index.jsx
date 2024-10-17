import { useState, useEffect } from "react";
import "./styles.css";

const CardDetailsForm = ({
  setName,
  setCardNumber,
  setMonth,
  setYear,
  month,
  year,
  setCvc,
  setIsFormSubmitted,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validCardNumber, setValidCardNumber] = useState(true);
  const [validCvc, setValidCvc] = useState(true);

  useEffect(() => {
    validateExpiry();
  }, [month, year]);

  const handleNameInput = (e) => {
    const input = e.target.value.toUpperCase();
    setName(input);
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    setValidName(regName.test(input));
  };

  const handleCardNumberInput = (e) => {
    let cardNumber = e.target.value
      .replace(/[^\d]/g, "")
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(cardNumber);
    const regCard = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
    setValidCardNumber(regCard.test(cardNumber));
  };

  const validateExpiry = () => {
    if (month.length === 2 && year.length === 2) {
      let expiryString = `${month}/${year}`;
      const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
      if (expiryRegex.test(expiryString.trim())) {
        const currentDate = new Date();
        const expiryDate = new Date(
          parseInt(`20${year}`, 10),
          parseInt(month, 10) - 1,
          1
        );
        setIsValid(expiryDate > currentDate);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
    }
  };

  const handleCVC = (e) => {
    let cvcNumber = e.target.value.slice(0, 3).trim();
    setCvc(cvcNumber);
    const regCvc = /^[0-9]{3}$/;
    setValidCvc(regCvc.test(cvcNumber));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      validName &&
      validCardNumber &&
      isValid &&
      validCvc
    ) {
      setIsFormSubmitted(true);
    } else {
      if (!validName) alert("Please enter a valid name (first and last).");
      if (!validCardNumber) alert("Please enter a valid card number.");
      if (!isValid) alert("Please enter a valid expiry date.");
      if (!validCvc) alert("Please enter a valid CVC.");
    }
  };

  return (
    <div className="card-form-container">
      <form className="card-form" onSubmit={handleFormSubmit}>
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
        <p className={`alert-name ${!validName ? 'active' : ''}`}>
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
        <p className={`alert-number ${!validCardNumber ? 'active' : ''}`}>
          <small>Please add a valid 16-digit card number.</small>
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

          <input
            type="text"
            id="cvc"
            name="cvc"
            placeholder="e.g. 123"
            maxLength="3"
            onChange={handleCVC}
            required
          />
        </div>

        <div>
          {!isValid && (
            <p className="alert-expiry active">Enter a valid expiry date</p>
          )}
        </div>
        <div>
          <p className={`alert-cvc ${!validCvc ? 'active' : ''}`}>
            Please enter a valid 3-digit CVC.
          </p>
        </div>
        <input className="confirm-button" type="submit" value="Confirm" />
      </form>
    </div>
  );
};

export default CardDetailsForm;
