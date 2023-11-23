import './App.css'
import { useState } from 'react';
function App() {
  let [counter, setCounter]=useState(5);
  const addVal=()=>{
    const val=counter+1
    if(val>20) return;
    setCounter(val);
    console.log('value added');
  }
  const removeVal=()=>{
    const val=counter-1;
    if(val<0) return;
    setCounter(val);
    console.log('value subtracted');
  }
  const addFive=()=>{
    setCounter(prevCount=>prevCount+1)
    setCounter(prevCount=>prevCount+1)
    setCounter(prevCount=>prevCount+1)
    setCounter(prevCount=>prevCount+1)
    setCounter(prevCount=>prevCount+1)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addVal}>Add 1</button>
    <button onClick={removeVal}>Subtract 1</button>
    <br />
    
    <button onClick={addFive}>Add 1 Five Times</button>
    </>
  )
}

export default App
