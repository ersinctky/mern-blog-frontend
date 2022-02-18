import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"

export default function User({user}) {
  const PK ="http://localhost:5000/images/"

  return (
    <div className="user">
    {user.profilePic && <img className="userImg" src={PK + user.profilePic} alt="" />}
    <div className="userInfo">
      
      <Link to={`/user/${user._id}`} className="link">
        <span className="userTitle">{user.title}</span>
      </Link>
      <hr />
      <span className="userDate">
        {new Date(user.createdAt).toDateString()}
      </span>
    </div>
    <p className="userDesc">{user.desc}</p>
  </div>
  )
}
