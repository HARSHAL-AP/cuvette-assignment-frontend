import React,{useState,useEffect} from 'react'
import Style from "../Signup/Signup.module.css"
import { Link } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
  const[user,setUser]=useState({
    username:"",
    email:"",
    password:""
  })

  const handlSignup=()=>{
    axios.post("http://13.51.199.109:3001/users/adduser",user).then((r)=>{
    const res=r.data
     if(!res.isError){
      alert("User Registered Sucsessfully.. Plese login ")
     }
     else{
      alert("Error While Signup...")
     }
    }).catch(()=>{
      alert("Error While Signup...")
    })

  }
 
  return (
    <div className={Style.logincon}>
    <h3>Signup</h3>
    <input type="text" placeholder=" Username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}/>
    <input type="email" placeholder=" email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
    <input type="password" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>

    <button onClick={handlSignup}>Submit</button>
    <div >
      alrady have acount <Link to="/login">Login</Link>
    </div>
  </div>
  )
}

export default Signup