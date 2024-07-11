import React from 'react'
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummydata';
export default function Sidebar() {
return (
<div className='sidebar'>
<div className="sidebarwrapper">
<ul className='sidebarlist'>
<li className="sidebarlistitem">
<RssFeedIcon/>
<span>feeds</span>
</li>
<li className="sidebarlistitem">
<ChatIcon/>
<span>chats</span>
</li>
<li className="sidebarlistitem">
<GroupIcon/>
<span>groups</span>
</li>
<li className="sidebarlistitem">
<BookmarkIcon/>
<span>bookmark</span>
</li>
<li className="sidebarlistitem">
<ContactSupportIcon/>
<span>contact</span>
</li>
<li className="sidebarlistitem">
<WorkIcon/>
<span>jobs</span>
</li>
<li className="sidebarlistitem">
<InsertInvitationIcon/>
<span>invitations</span>
</li>
<li className="sidebarlistitem">
<SchoolIcon/>
<span>education</span>
</li>
</ul> 
<button className="sidebarbutton">
<span>Show More</span>
<hr className='sidebarhr'/>
<ul className="sidebarfriendlist">
<li className="sidebarfriend">
<img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
<span className="sidebarfriendlist">Daniel Melaku</span>
</li>
<li className="sidebarfriend">
<img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
<span className="sidebarfriendlist">Daniel Melaku</span>
</li>
<li className="sidebarfriend">
<img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
<span className="sidebarfriendlist">Daniel Melaku</span>
</li>
<li className="sidebarfriend">
<img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
<span className="sidebarfriendlist">Daniel Melaku</span>
</li>
<li className="sidebarfriend">
<img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
<span className="sidebarfriendlist">Daniel Melaku</span>
</li>
<li className="sidebarfriend">
<img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
<span className="sidebarfriendlist">Daniel Melaku</span>
</li>
</ul>
</button>
</div>
</div>
)
}
