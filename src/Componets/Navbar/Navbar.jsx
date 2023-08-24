import React from 'react'
import Style from "../Navbar/Navbar.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
const user=JSON.parse(localStorage.getItem("user"))||{} 
const navigate=useNavigate()

const userLogout=()=>{
  const auth={
    isAuth:false,
    res:{}
  }
  alert("Log Out Sucsessfull..!")
  localStorage.setItem("user",JSON.stringify(auth))
  window.location.reload()

}
  return (
    <div className={Style.navbar}>
     <div  className={Style.logo}>
      <h1 onClick={()=>navigate("/")}>Blog App</h1>
     </div>
     <div  className={Style.linksc}> 
     {user.isAuth&&<button onClick={()=>navigate("/create")}>Create</button>}
     {user.isAuth?<button onClick={userLogout}>Logout</button>:<Link to="/login" className={Style.linkscs}>Login</Link>}
     
     
       
       
     </div>
    </div>
  )
}

export default Navbar