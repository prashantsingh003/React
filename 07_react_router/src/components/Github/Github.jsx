import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github(){
	// const [user,setUser]=useState([]);
	// useEffect(()=>{
	// 	getGithub().then(res=>setUser(res))
	// },[])
	const user=useLoaderData()
	return (
		<>
		<h2 className="text-center bg-gradient-to-r from-gray-700 to-slate-200 text-white text-3xl m-7">
			<div>Github: {user.name}</div>
			<p>Followers {user.followers}</p>
			<a href={user.html_url} target="blank">
				<img src={user.avatar_url} alt="" className="mx-auto hover:scale-90 rounded-3xl shadow-xl"/>
			</a>
		</h2>
		</>
	)
}
export const getGithub=async()=>{
	let res = await fetch('https://api.github.com/users/prashantsingh003')
	res=res.json();
	console.log(res)
	return res;
}