import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
	const{user}=useContext(UserContext);
	if(user){
		return (
			<div>
				Welcome !!!
				<p> {user.username}</p>
			</div>
		)
	}
	else{
		return <div>Please Login To continue !!!</div>
	}
}
export default Profile;