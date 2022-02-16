import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import { useEffect, useState } from "react";

import "./homepage.css";
import { myApi } from "../../api/myApi";

export default function Homepage() {

  const [posts,setPosts]=useState([])

  useEffect(()=>{
    
    const fetchPosts = async()=>{
      const res = await myApi.get("/posts")
      setPosts(res.data)  
  }

    fetchPosts()

  },[])
  
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