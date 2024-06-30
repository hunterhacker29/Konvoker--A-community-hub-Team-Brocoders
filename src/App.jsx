import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Register from './pages/Register';
import CreateC from './components/CreateC';
import Blogcard from './components/Blogcard';
import Sidebar from './components/Sidebar';
import Communitypage from './pages/Communitypage';
import Blog_view from './pages/Blog_view';
import Commentform from './components/Commentform';
import Uploadtest from './pages/Uploadtest'; // Import Uploadtest component
import CreateBlog from './pages/Uploadtest';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/community/create" element={<CreateC />} />
          <Route path="/home/viewblog" element={<Blogcard />} />
          <Route path="/community/:communityId" element={<Communitypage />} />
          <Route path="/community/:communityId/blog" element={<Blog_view />} />
          <Route path="/communities/:communityId/createpost" element={<CreateBlog />} />

          <Route path="/community/:communityId/blog/comment" element={<Commentform />} />
          <Route path="/community/:communityId/createblog" element={<Uploadtest />} /> {/* Route for Uploadtest component */}
          <Route path="/home/card" element={<Blogcard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
