import React from "react"
import CardSection from "../CardSection"
import CardDetailsForm from "../CardDetailsForm"
import "./styles.css"
import { useState } from "react"

const DesktopLayout = () => {
  const [name, setName] = useState("")
  const [cardNumber, setCardNumber] = useState("")

  return (
    <div className="desktop-container">
      <CardSection
        name={name === "" ? "JANE APPLESEED" : name}
        cardNumber={cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}
      />
      <CardDetailsForm setName={setName} setCardNumber={setCardNumber} />
    </div>
  )
}

export default DesktopLayout
