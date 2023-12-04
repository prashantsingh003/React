import { Header,Footer } from "./components"
import { Outlet } from "react-router-dom";
function Layout(){
	return (
		<>
		<Header/>
		<Outlet></Outlet>
		<Footer/>
		</>
	)
}
export default Layout;