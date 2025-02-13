import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 15;
  function addValue(){
    if(counter == 20) return ;
    setCounter(counter += 1)
  }
  function removeValue(){
    if(counter != 0){
    setCounter(counter -= 1)
    }
    
  }
  return (
    <>
      <h1>Getting to Know - HOOKS</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value </button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
