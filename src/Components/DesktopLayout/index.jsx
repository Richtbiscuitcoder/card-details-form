import CardSection from "../CardSection"
import CardDetailsForm from "../CardDetailsForm"
import "./styles.css"
import { useState } from "react"
import FormComplete from "../FormComplete/FormComplete"

const DesktopLayout = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  return (
    <div className="desktop-container">
      <CardSection
        name={name === "" ? "JANE APPLESEED" : name}
        cardNumber={cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}
        month={month ==="" ? "00" : month}
        year={year ==="" ? "00" : year}
        cvc={cvc ==="" ? "000" : cvc}
      />
      
      {isFormSubmitted ? <FormComplete /> : <CardDetailsForm setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setYear={setYear} month={month} year={year} setCvc={setCvc} cvc={cvc} setIsFormSubmitted={setIsFormSubmitted}/>}
      {/* <CardDetailsForm setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setYear={setYear} month={month} year={year} setCvc={setCvc} cvc={cvc}/>
      <FormComplete /> */}
    </div>
  )
}

export default DesktopLayout
