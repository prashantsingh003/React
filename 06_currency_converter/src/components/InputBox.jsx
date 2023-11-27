import { useState, useEffect, useId } from "react";
function InputBox({
    label,
    className = "",

    currency = 'usd',
    onCurrencyChange,
    disableCurrency = false,

    currencies = [],

    amt,
    onAmtChng,
    disableAmt = false,
}) {
    const amtId=useId();

    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={amtId}>
                    {label}
                </label>
                <input
                    value={amt}
                    id={amtId}
                    onChange={(e) => onAmtChng && onAmtChng(Number(e.target.value))}
                    disabled={disableAmt}
                    className="outline-none w-full text-black bg-gray-200 rounded-lg p-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 cursor-pointer outline-none"
                    value={currency}
                    disabled={disableCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencies.map((cur, i) => <option key={cur} value={cur}>{cur}</option>)}
                </select>
            </div>
        </div>
    );
}

export default InputBox;