import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1) // Stores the previous value
    // setCounter(counter + 1)
    // setCounter(counter + 1) // It will not store the previous value
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello World!!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addValue}>Add value</button>
      <br />
      <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
