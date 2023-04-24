import Post from '../post/Post';
import Share from '../share/Share';

import {Posts} from '../../dummy.data';

import './feed.css';

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share />

        {
          Posts.map((post) => {
            return <Post key={post.id} post={post} />
          })
        }
      </div>
    </div>
  );
}
