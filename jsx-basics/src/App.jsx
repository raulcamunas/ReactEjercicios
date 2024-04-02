import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let now = new Date();
  let time = <p>{now < 12 ? "Good morning" : "Good afternoon"}</p>
  return (
    <>
      <h1>{time}</h1>
    </>
  )
}

export default App
