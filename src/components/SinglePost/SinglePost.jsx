import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { myApi } from "../../api/myApi";
import "./singlePost.css";

export default function SinglePost() {
const location = useLocation()
const path = location.pathname.split("/")[2];
const [post,setPost]=useState({})
const PK ="http://localhost:5000/images/"



useEffect(()=>{
  const getPost=async()=>{
    const res= await myApi.get("/posts/"+ path)
setPost(res.data)  }
  getPost()
},[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (<img
          className="singlePostImg"
          src={PK + post.photo}
          alt=""
        />)}
        
        <h1 className="singlePostTitle">

        {post.title}        
         <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
            <Link className="link" to={`/posts?user=${post.user}`} >
                {post.user}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}