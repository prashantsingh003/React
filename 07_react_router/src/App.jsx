import { useState } from 'react'
import { Home,Footer,Header } from './components'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
    </>
  )
}

export default App
