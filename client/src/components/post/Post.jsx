import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

import {Users} from '../../dummy.data';

import './post.css';

export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className='post-profile-img' 
              src={
                Users.filter(user => user.id === post.userId)[0].profilePicture
              }
              alt="" 
            />
            <span className="post-username">
              {
                Users.filter(user => user.id === post.userId)[0].username
              }
            </span>
            <span className="post-date">{post.date}</span>
          </div>
        
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>

        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className='post-img' src={post.photo} alt="" />
        </div>
        
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img className='like-icon' src="assets/like.png" alt="" onClick={likeHandler} />
            <img className='like-icon' src="assets/heart.png" alt="" onClick={likeHandler} />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
