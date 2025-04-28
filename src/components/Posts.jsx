import { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

export default function Posts() {
  const posts = useContext(PostContext);

  const displayPosts = (posts) => {
    return posts.map(post => (
      <div key={post.id}>
        <h3><Link to={`/${post.id}`}>{post.title}</Link></h3>
      </div>
    ));
  };

  return (
    <div className='posts'>
      {displayPosts(posts)}
    </div>
  );
};