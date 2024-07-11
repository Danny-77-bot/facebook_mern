import React from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';


export default function Home() {
  return (
    <div>
     
      <Topbar />
      <div className="homecontainer">
      <Sidebar/>
       <Feed/>
       <Rightbar/>
      
      </div>
    </div>
  );
}
