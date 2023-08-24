import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Style from "../SingleBlog/Singleblog.module.css";
import axios from "axios";
const Singleblog = () => {
  const [data, setdata] = useState({});
  const obj=JSON.parse(localStorage.getItem("item"))||{}
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://13.51.199.109:3001/blogs/getblogs/${id}`)
      .then((r) => {
        setdata(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className={Style.sibcon}>
      <h2>{obj.title}</h2>

      <p>
       {obj.content}
      </p>
      <h4>Author: User Name</h4>
    </div>
  );
};

export default Singleblog;
