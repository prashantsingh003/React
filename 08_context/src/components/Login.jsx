import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function Login(){
	const [username,setUsername]=useState();
	const [password,setPassword]=useState();
	const handleSubmit=(e)=>{
		e.preventDefault();
		setUser({username,password});
	}
	const {setUser}=useContext(UserContext)
	return(
		<div>
			<h2>Login</h2>
			<input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
			<input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}
export default Login;