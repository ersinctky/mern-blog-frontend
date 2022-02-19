import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { myApi } from '../../api/myApi';
import "./user.css"

export default function User({user}) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF ="http://localhost:5000/images/"
  const [updateMode, setUpdateMode] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const history = useHistory()


  

  const handleDelete = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await myApi.delete(`/users/${user._id}`, config);
      // window.location.replace("/");
      history.push("/")
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
  
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await myApi.put(`/users/${user._id}`, {
        user: user.id,
        name:user.name,
        email:user.email
        
      },config);
      setUpdateMode(false)
    } catch (err) {}
  };


  return (

      <div className="user">
      {user.profilePic ? <img className="userImg" src={PF + user.profilePic} alt="" /> : <p>No Image</p>}
      <div className="userInfo">
  
        <Link to={`/user/${user._id}`} className="link">
          <span className="userTitle">{user.name}</span>
        </Link>
  
  
        
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
          
        
        <hr />
        <span className="userDate">
          {new Date(user.createdAt).toDateString()}
        </span>
        <hr />
  
      </div>
      {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{user.email}</p>
        )}
  
      {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
    </div>
    )

   
  
}
