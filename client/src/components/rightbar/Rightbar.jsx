import React from 'react'
import './rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummydata'; 
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="assets/gift.png" alt="" className="birthdayimg" />
          <span className="birthdaytext">
           <b> Getachew Lemmma</b> and <b>5 other friends</b> have a birthday today
          </span>
        </div>
      </div>
      <img src="assets/ad.png" alt="" className="rightbarad" />
      <h4 className="rightbartitle">Online Friends</h4>
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Rodaz Alemu</span>
        </li>
      </ul>
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Rodaz Alemu</span>
        </li>
      </ul>
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Rodaz Alemu</span>
        </li>
      </ul>
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Rodaz Alemu</span>
        </li>
      </ul>
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Rodaz Alemu</span>
        </li>
      </ul>
      <ul className="rightbarfriendlist">
        <li className="rightbarfriend">
          <div className="rightbarprofileimgcontainer">
            <img src="assets/person/3.jpeg" alt="" className="rightbarprofileimg" />
            <span className="rightbaronline"></span>
          </div>
          <span className="rightbarusername">Rodaz Alemu</span>
        </li>
      </ul>
      <ul className="rightbarfriendlist">
      {Users.map(u=>(
        <Online key={u.id} user={u}/>
      ))}
      </ul>
    </div>
  )
}
