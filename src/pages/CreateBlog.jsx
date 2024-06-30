import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const communityId = 'your-community-id'; // Replace with the actual community id
      const blogData = {
        title,
        text,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, `communities/${communityId}/Blogs`), blogData);
      const blogId = docRef.id;

      const uploadPromises = [];
      for (const file of files) {
        const storageRef = ref(storage, `blogs/${blogId}/${file.name}`);
        uploadPromises.push(uploadBytes(storageRef, file));
      }

      await Promise.all(uploadPromises);

      alert('Blog uploaded successfully!');
    } catch (error) {
      console.error('Error uploading blog:', error);
      alert('Failed to upload blog');
    }
  };

  return (
    <div id="createBlog-page">
      <Navbar />
      <div id="createBlog-sidebar">
        <Sidebar />
        <div id="createBlog-body">
          <div className="createBlog-container mt-5">
            <div className="createBlog-card custom-card">
              <div className="createBlog-card-body">
                <h2 className="createBlog-card-title">Upload Blog</h2>
                <form onSubmit={handleSubmit}>
                  <div className="createBlog-form-group">
                    <label htmlFor="createBlog-title">Title</label>
                    <input
                      type="text"
                      className="createBlog-form-control"
                      id="createBlog-title"
                      placeholder="Enter the title of your blog"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="createBlog-form-group">
                    <label htmlFor="createBlog-file">Upload Images</label>
                    <div className="input-group mb-3">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="createBlog-file"
                          multiple
                          onChange={handleFileChange}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="createBlog-file"
                        >
                          Choose images for your blog
                        </label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div className="createBlog-form-group">
                    <label htmlFor="createBlog-text">Text</label>
                    <textarea
                      className="createBlog-form-control"
                      id="createBlog-text"
                      rows="6"
                      placeholder="Write your blog text here"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
