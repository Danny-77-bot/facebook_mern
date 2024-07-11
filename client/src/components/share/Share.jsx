import React from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';
export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
            <img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" />
            <input type="text" className="shareinput" placeholder="what's in your mind" />
            </div>
   <hr className='sharehr'/>
   <div className="sharebottom">
    <div className="shareoptions">
      <div className="shareoption">
      <PermMediaIcon htmlColor='tomato' className='shareicon'/>
    <span className="shareoptiontext">
        Photo or Video
    </span>
      </div>
      <div className="shareoption">
      <LabelIcon htmlColor='blue' className='shareicon'/>
    <span className="shareoptiontext">
        Tag
    </span>
      </div>
      <div className="shareoption">
      <LocationOnIcon htmlColor='green' className='shareicon'/>
    <span className="shareoptiontext">
      Location
    </span>
      </div>
      <div className="shareoption">
      <MoodIcon htmlColor='goldenrod' className='shareicon'/>
    <span className="shareoptiontext">
       Feelings
    </span>
      </div>
      <button className="sharebtn">Share</button>
    </div>
   </div>
        </div>
    </div>
  )
}
