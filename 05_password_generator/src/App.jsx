import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState('');

  // useRef Hook
  const passRef=useRef(null);
  const copyPasswordToClipboard=()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  };
  const passwordGenerator=useCallback(
    ()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
      if(allowNum) str+="1234567890";
      if(allowChar) str+="!@#$%^&*-_=+~";
      for(let i=1;i<=len;i++){
        let char=Math.floor(Math.random()*str.length);
        pass+=str.charAt(char);
      }
      setPassword(pass);
    },
    [len,allowNum,allowChar,setPassword])

  useEffect(passwordGenerator,[len,allowNum,allowChar,passwordGenerator]);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-white text-center my-3">
        Password Generator
      </h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={password}
          className='outline-none w-full px-3 py-1' 
          placeholder='Password'
          readOnly
          ref={passRef}
        />
        <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0 5"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={len}
          className='cursor-pointer'
          onChange={(e)=>setLen(e.target.value)}
          />
          <label> Length: {len}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input 
            type="checkbox"
            defaultChecked={allowNum}
            id="numberInput"
            onChange={()=>setAllowNum(prev=>!prev)}
            />
            <label>Numbers</label>
        </div>
        
        <div className="flex items-center gap-x-2">
          <input 
            type="checkbox"
            defaultChecked={allowChar}
            id="charInput"
            onChange={()=>setAllowChar(prev=>!prev)}
            />
            <label>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
