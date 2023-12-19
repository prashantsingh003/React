import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { About, Contact, Home, User, Github } from "./components/index.js"
import { getGithub } from "./components/Github/Github.jsx";
import Layout from "./Layout.jsx";
const Router=createBrowserRouter(
  createRoutesFromElements(
		<Route path="/" element={<Layout/>}>
			<Route path="" element={<Home/>}/>
			<Route path="about" element={<About/>}/>
			<Route path="contact" element={<Contact/>}/>
      <Route 
        path="github" 
        element={<Github/>}
        loader={getGithub}
      />
      <Route path="user/:id" element={<User/>}/>
		</Route>
	)
	// [{
  //   path:'/',
  //   element:Layout(),
  //   children:[
  //     {
  //       path:'',
  //       element:Home(),
  //     },
  //     {
  //       path:'about',
  //       element:About()
  //     },
  //     {
  //       path:'contact',
  //       element:Contact()
  //     },
  //     {
  //       path:'user/:userId',
  //       element:User()
  //     },
  //   ]
  // }]
)
export default Router;