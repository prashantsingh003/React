import { useState } from 'react'
import Card from './components/card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    age:23,
    name:"prashant"
  }
  return (
    <>
      <h1 className="mb-4 bg-green-400 p-4 rounded-xl">Tailwind Test</h1>
      <Card userName="sam" btnTxt="click me"/>
      <Card userName="prashant" btnTxt="visit profile"/>
      <Card userName="tim"/>
    </>
  )
}

export default App
