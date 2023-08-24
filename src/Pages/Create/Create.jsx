import React,{useState} from 'react'
import Style from "../Create/Create.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [blog,setblog]=useState({
    title:"",content:""
  })
  const user=JSON.parse(localStorage.getItem("user"))||{} 
  const navigate=useNavigate()
  
const handleSubmit=()=>{
const id=user.res.user.id;
let newblog={
  ...blog,userId:id
}
axios.post("http://13.51.199.109:3001/blogs/create",newblog).then((r)=>{
  alert("blog Created .....")
})
.catch((e)=>{
  alert("Error While Creating blog....")
})
}
  return (
    <div className={Style.cretebox}>
     <h1>Create Your Blog</h1>
     <input type="text" placeholder='Add title of Blog' value={blog.title} onChange={(e)=>setblog({...blog,title:e.target.value})}/>
     <textarea  cols="100" rows="15" placeholder='Start typing here...' value={blog.content} onChange={(e)=>setblog({...blog,content:e.target.value})}></textarea>
     <button onClick={handleSubmit}>Create</button>
    </div>
  )
}

export default Create