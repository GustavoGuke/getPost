import React from 'react'

import '../style.css'

export default function PostCard({posts}) {
  return (
    <ul className='post'>
        <li><img src={posts.cover} alt="" /></li>
        <li><h3>{posts.title}</h3></li>
        <li><p>{posts.body}</p></li>
    </ul>
)
}
