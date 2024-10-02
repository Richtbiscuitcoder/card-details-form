import CardSection from "../CardSection"
import CardDetailsForm from "../CardDetailsForm"
import "./styles.css"
import { useState } from "react"

const DesktopLayout = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
 
  return (
    <div className="desktop-container">
      <CardSection
        name={name === "" ? "JANE APPLESEED" : name}
        cardNumber={cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}
        month={month ==="" ? "00" : month}
        year={year ==="" ? "00" : year}
      />
      <CardDetailsForm setName={setName} setCardNumber={setCardNumber} setMonth={setMonth} setYear={setYear} month={month} year={year}/>
    </div>
  )
}

export default DesktopLayout
