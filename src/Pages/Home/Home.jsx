import React, { useState, useEffect } from "react";
import Style from "../Home/Home.module.css";
import Blogcontener from "../../Componets/Blogcontener/Blogcontener";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://13.51.199.109:3001/blogs/getblogs")
      .then((r) => {
        setData(r.data.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Error....");
      });
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className={Style.homecon}>
      <h3>Blogs</h3>
      <div className={Style.blogcon}>
        {data.map((e, index) => {
          return <Blogcontener key={index} obj={e} />;
        })}
      </div>
    </div>
  );
};

export default Home;
