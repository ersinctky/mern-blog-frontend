import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import {  useEffect, useState } from "react";

import "./homepage.css";
import { myApi } from "../../api/myApi";
import { useLocation } from "react-router-dom";

export default function Homepage() {



  const [posts,setPosts]=useState([])
  const {search} = useLocation()

  useEffect(()=>{
    
    const fetchPosts = async()=>{
      
      const res = await myApi.get("/posts"+search)


      setPosts(res.data)  
  }
    fetchPosts()

  },[search,posts])
  
  return (
    <>
    <Header />
    <div className="home">
      <Posts posts={posts} />
      <SideBar />
    </div>
  </>
  );
}