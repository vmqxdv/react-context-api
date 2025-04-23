import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <PostContext.Provider value={posts}>
      {children}
    </PostContext.Provider>
  );
}