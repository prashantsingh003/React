import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{backgroundColor:color,width:'100%'}}
    >
      <div 
        className="fixed 
        flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white rounded-full px-3 py-2">
          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'Red'}}
            onClick={()=>setColor('Red')}
          >Red
          </button>

          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'Green'}}
            onClick={()=>setColor('Green')}
          >Green
          </button>

          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'Purple'}}
            onClick={()=>setColor('Purple')}
          >Purple
          </button>

          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'Olive'}}
            onClick={()=>setColor('Olive')}
          >Olive
          </button>

          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'skyblue'}}
            onClick={()=>setColor('skyblue')}
          >Skyblue
          </button>

          <button 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:'Grey'}}
            onClick={()=>setColor('Grey')}
          >Grey
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
