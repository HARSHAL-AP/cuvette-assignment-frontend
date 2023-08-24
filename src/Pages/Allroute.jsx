import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup"
import Singleblog from "../Pages/SingleBlog/Singleblog"
import Create from './Create/Create'
import Privateroute from './Privateroute'
const Allroute = () => {
  return (
 <>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/> 
  <Route path="/blog/:id" element={ <Privateroute> <Singleblog/></Privateroute> }/>
  <Route path="/create" element={<Privateroute><Create/></Privateroute>}/> 
  </Routes>
 
 
 </>
  )
}

export default Allroute