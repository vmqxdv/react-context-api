import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

export default function PostDetails() {
  const { id } = useParams();
  const posts = useContext(PostContext);

  const post = posts.find(post => post.id === parseInt(id));

  if (!post)
    return <div>Post non trovato.</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};