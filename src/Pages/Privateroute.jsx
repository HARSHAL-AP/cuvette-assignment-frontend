import React from 'react'
import { Navigate } from 'react-router-dom'

const Privateroute = ({children}) => {
  const user=JSON.parse(localStorage.getItem("user"))||{} 
  

  if(!user.isAuth){
    return <Navigate to="/login"/>
  }

  return children
}

export default Privateroute