import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import {  useContext, useEffect, useState } from "react";

import "./userlist.css";
import { myApi } from "../../api/myApi";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Userlist() {

const {user}=useContext(Context)

  const [users,setUsers]=useState([])
  const {search} = useLocation()

  useEffect(()=>{
    
    const fetchUsers = async()=>{
    
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
      
      const res = await myApi.get("/users"+search,config)
      console.log(res.data);
      setUsers(res.data)  
  }
    fetchUsers()

  },[search, user.token])
  
  return (
    <>
    <Header />
    <div className="home">
      {/* <User user={user} /> */}
     
      <SideBar />
    </div>
  </>
  );
}