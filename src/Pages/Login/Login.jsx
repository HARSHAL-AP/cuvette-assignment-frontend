
import React,{useState,useEffect} from 'react'
import Style from "../Login/Login.module.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const[user,setUser]=useState({
   
    email:"",
    password:""
  })
 const navigate=useNavigate()
  const handlSignup=()=>{
    axios.post("http://13.51.199.109:3001/users/loginuser",user).then((r)=>{
    const res=r.data
     if(!res.isError){
      const auth={
        isAuth:true,
        res
      }
      alert(res.message)
      localStorage.setItem("user",JSON.stringify(auth))
      navigate("/")
     }
     else{
      alert("Error While Login...")
     }
    }).catch(()=>{
      alert("Error While Login...")
    })

  }
  return (
    <div className={Style.logincon}>
      <h3>Login </h3>
      <input type="email" placeholder=" email"  value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <input type="password" placeholder="Password"  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
      <button onClick={handlSignup}>Submit</button>
      <div >
        dont have acoutn <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Login;
  