import React from 'react'
import User from '../User/User'
import "./users.css"


export default function Users({users}) {

  return (
    <div className="users">
   {users.map((user)=>(
     <User key={user.id} user={user}/>
   ))}
   </div>
  )
}
