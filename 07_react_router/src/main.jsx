import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
// import Router from './router.js'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { About, Contact, Home, User } from "./components"
import Layout from "./Layout.jsx";
const Router=createBrowserRouter(
  createRoutesFromElements(
		<Route path="/" element={<Layout/>}>
			<Route path="" element={<Home/>}/>
			<Route path="about" element={<About/>}/>
			<Route path="contact" element={<Contact/>}/>
			<Route path="user/:id" element={<User/>}/>
		</Route>
	)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
