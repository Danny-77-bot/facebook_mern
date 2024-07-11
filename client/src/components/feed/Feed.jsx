import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import { posts } from '../../dummydata';

export default function Feed() {
  return (
    <div className='feed'>
      <div className="wrapper">
        <Share />
        {posts.map(p => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
