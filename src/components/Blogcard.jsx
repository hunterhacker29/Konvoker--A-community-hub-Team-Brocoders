import React, { useEffect, useState } from 'react';
import '../styles/blogcard.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { db } from '../server/Firebase';
import { collection, getDocs } from 'firebase/firestore';

function Blogcard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const snapshot = await getDocs(collection(db, 'communities', 'your-community-id', 'Blogs'));
      const blogList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blogcard-container">
      {blogs.map(blog => (
        <div key={blog.id} className="blogcard-card">
          <div className="blogcard-card-header">
            <div className="blogcard-userpfp">
              <img src={blog.profilePicUrl} alt="Profile" className="blogcard-profile-pic" />
            </div>
            <div className="blogcard-Uname-postedtime">
              <strong>{blog.username}</strong>
              <br />
              <span className="blogcard-text-muted">{blog.datePosted}</span>
            </div>
          </div>
          <div className="blogcard-card-body">
            <h4 className="blogcard-ti">{blog.title}</h4>
            <div className="blogcard-shortdesc">{blog.content.substring(0, 200)}</div>
            <div className="blogcard-post-img">
              <img src={blog.thumbnailUrl} alt="Blog Thumbnail" className="blogcard-img-fluid" />
            </div>
            <div className="blogcard-interaction-buttons">
              <IoIosHeartEmpty />
              <FaRegComment />
              <FaShare />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogcard;
