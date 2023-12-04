import { createBrowserRouter } from "react-router-dom"
import { About, Contact, Home } from "./components"
import Layout from "./Layout.jsx";
const Router=createBrowserRouter([
  {
    path:'/',
    element:Layout(),
    children:[
      {
        path:'',
        element:Home(),
      },
      {
        path:'about',
        element:About()
      },
      {
        path:'contact',
        element:Contact()
      }
    ]
  }
])
export default Router;