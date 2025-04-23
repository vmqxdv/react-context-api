import { PostProvider } from './context/PostContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostDetails from './components/PostDetails';

export default function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostsPage />} />
          <Route path='/:id' element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}