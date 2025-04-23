import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div>
      <h3><Link to={`/${post.id}`}>{post.title}</Link></h3>
    </div>
  );
}