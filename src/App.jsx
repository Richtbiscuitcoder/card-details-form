import { useState } from 'react'
import './App.css'
import DesktopLayout from './Components/DesktopLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DesktopLayout />
    </>
  )
}

export default App
