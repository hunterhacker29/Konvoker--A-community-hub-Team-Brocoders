import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Blog_view.css';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaCommentMedical, FaShare } from 'react-icons/fa';

const comments = [
  {
    username: 'User1',
    dateAdded: '2024-06-30',
    pfp: 'https://example.com/user1.jpg',
    text: 'comment 1',
  },
  {
    username: 'User2',
    dateAdded: '2024-06-29',
    pfp: 'https://example.com/user2.jpg',
    text: 'comment 2',
  },
];

const Blog_view = () => {
  return (
    <>
      <Navbar />
      <div className='sidebar-container'>
        <Sidebar />
        <div className="blog-body">
          <div className="container-fluid">
            <div className="blogpost-content">
              <div className="header d-flex align-items-center mb-3">
                <div className="back-arrow me-2">&larr;</div>
                <div className="user-pfp me-2">
                  {/* Add user profile image here if needed */}
                </div>
                <div className="username-postedtime">
                  <strong>Username</strong>
                  <br />
                  <span className="text-muted">dateposted</span>
                </div>
              </div>
              <h4 className="title">Title</h4>
              <div className="image-container mt-3">
                <img src="image-placeholder.jpg" className="img-fluid" alt="Post Image" />
              </div>
              <div className="blog-text mt-3">
                {/* Add the blog text content here */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
              </div>
              <div className="icons-container">
                <div className="like-icon"><IoMdHeartEmpty className="icon" /></div>
                <div className="comment-icon"><FaCommentMedical className="icon" /></div>
                <div className="share-icon"><FaShare className="icon" /></div>
              </div>
            </div>
            <div className="comments-section">
      <div className="comments-header mt-3">
        <h2>Comments</h2>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-header">
            <img
              src={comment.pfp}
              alt={`${comment.username}'s profile`}
              className="comment-pfp"
            />
            <div className="comment-info">
              <span className="comment-username">{comment.username}</span>
              <span className="comment-date">{comment.dateAdded}</span>
            </div>
          </div>
          <div className="comment-text">{comment.text}</div>
          {index < comments.length - 1 && <hr />}
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_view;
