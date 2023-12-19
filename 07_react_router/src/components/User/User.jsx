import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom"
export default function User(){
	const {id}=useParams();
		console.log(id)
	return(
		<h2 className="bg-orange-700">User: {id}</h2>
	)
}