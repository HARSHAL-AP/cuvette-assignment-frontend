import React from 'react'
import Style from "../Blogcontener/Blogcontener.module.css"
import { Link } from 'react-router-dom'

const Blogcontener = ({obj}) => {
 console.log(obj)
  const handleObj=()=>{
    localStorage.setItem("item",JSON.stringify(obj))
  }
  return (
    <div className={Style.outeb}>
      <h2>{obj.title}</h2>
      <p>{obj.content}</p>
      <Link to={`/blog/${obj.id}`} onClick={handleObj}>...Read more</Link>
    </div>
  )
}

export default Blogcontener