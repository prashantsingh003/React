import { createContext, useContext, useEffect, useState } from "react";


export const ThemeContext=createContext();

// export const ThemeProvider=ThemeContext.Provider
export const ThemeProvider=({children})=>{
	const[theme,setTheme]=useState('light');
	const setDark=()=>setTheme('dark');
	const setLight=()=>setTheme('light');
	useEffect(()=>{
		const el=document.querySelector('html');
		el.classList.remove("light","dark");
		el.classList.add(theme)
	},[theme])
	return(
		<ThemeContext.Provider value={{theme,setDark,setLight}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default function useTheme(){
	return useContext(ThemeContext);
}