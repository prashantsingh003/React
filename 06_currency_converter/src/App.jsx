import { useState } from 'react';
import { InputBox } from './components';
import { useCurrencyInfo } from './hooks';
// import './App.css'

function App() {
  const backgroundImage = "https://images.pexels.com/photos/13703327/pexels-photo-13703327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [amt, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmt, setConvertedAmount] = useState(0);

  const setAmt=(n)=>{
    if(parseInt(n)!==parseFloat(n)){
      n=parseFloat(n).toFixed(2);
    }
    setAmount(n);
  };
  const setConvertedAmt=(n)=>{
    if(parseInt(n)!==parseFloat(n)){
      n=parseFloat(n).toFixed(3);
    }
    setConvertedAmount(n);
  };
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmt(amt);
    setAmt(convertedAmt);
  }

  const convert = () => setConvertedAmt(currencyInfo[to] * amt)

  const currencyInfo = useCurrencyInfo(from);
  const currencies = Object.keys(currencyInfo);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currency={from}
                onCurrencyChange={(currr)=>setFrom(currr)}
                disableCurrency={false}
                currencies={currencies}
                amt={amt}
                onAmtChng={(n)=>setAmt(n)}
                disableAmt={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currency={to}
                onCurrencyChange={(currr)=>setTo(currr)}
                disableCurrency={false}
                currencies={currencies}
                amt={convertedAmt}
                onAmtChng={(n)=>setConvertedAmt(n)}
                disableAmt
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
              Convert {from.toUpperCase()+" to "+to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
