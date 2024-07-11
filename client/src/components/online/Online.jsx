import React from 'react'
import './online.css';
export default function Online({user}) {
  return (
    <div>
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <div>
          <span className="rightbarusername">{user.username}</span>
          <span className="rightbarusername">{user.username}</span>
          </div>
        </li>
    </div>
  )
}
