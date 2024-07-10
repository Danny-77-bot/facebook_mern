import { Search } from '@mui/icons-material'
import React from 'react'
import './topbar.css';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
export default function Topbar() {
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
        <span className='logo'>DannySocial</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
            <Search className='searchicon'/>
            <input placeholder='search for friend,post or video' className='searchinput'/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
            <span className='topbarlink'>HomePage</span>
            <span className='topbarlink'>TimeLine</span>

        </div>
        <div className='topbaricons'>
        <div className="topbariconitem">
            <PersonIcon/>
            <span className='topbariconbadge'>1</span>
        </div>
        <div className="topbaricons">
        <div className="topbariconitem">
            <ChatIcon/>
            <span className='topbariconbadge'>1</span>
        </div>
        </div>
        <div className="topbaricons">
        <div className="topbariconitem">
            <CircleNotificationsIcon/>
            <span className='topbariconbadge'>1</span>
        </div>
        </div>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
    </div>
  )
}
