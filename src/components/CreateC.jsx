import React, { useState } from 'react';
import { db, storage, auth } from '../server/Firebase'; // Adjust the import path as needed
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Navbar } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function CreateC() {
  const [communityName, setCommunityName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [banner, setBanner] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload profile picture to Firebase Storage
      let profilePicUrl = '';
      if (profilePic) {
        const profilePicRef = ref(storage, `profile_pics/${profilePic.name}`);
        await uploadBytes(profilePicRef, profilePic);
        profilePicUrl = await getDownloadURL(profilePicRef);
      }

      // Upload banner image to Firebase Storage
      let bannerUrl = '';
      if (banner) {
        const bannerRef = ref(storage, `banners/${banner.name}`);
        await uploadBytes(bannerRef, banner);
        bannerUrl = await getDownloadURL(bannerRef);
      }

      // Get current user
      const user = auth.currentUser;

      // Add community to Firestore
      await addDoc(collection(db, 'communities'), {
        name: communityName,
        profilePicUrl,
        bannerUrl,
        description,
        createdBy: user ? user.uid : null,
        creatorEmail: user ? user.email : null,
        createdAt: new Date()
      });

      // Reset form fields
      setCommunityName('');
      setProfilePic(null);
      setBanner(null);
      setDescription('');
      setError(null);
      alert('Community created successfully!');
    } catch (err) {
      console.error('Error creating community: ', err);
      setError('Error creating community. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand>Create Community</Navbar.Brand>
      </Navbar>

      <div className="container mt-5">
        <div className="card createc-card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="createc-community-name">Community Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="createc-community-name"
                  placeholder="Enter the name of your community"
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="createc-community-banner">Community Banner</label>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="createc-community-banner"
                      onChange={(e) => setBanner(e.target.files[0])}
                    />
                    <label className="custom-file-label" htmlFor="createc-community-banner">
                      Choose banner for your community
                    </label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text">Upload</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="createc-community-profile-pic">Community Profile Picture</label>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="createc-community-profile-pic"
                      onChange={(e) => setProfilePic(e.target.files[0])}
                    />
                    <label className="custom-file-label" htmlFor="createc-community-profile-pic">
                      Choose profile picture for your community
                    </label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text">Upload</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="createc-community-description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="createc-community-description"
                  placeholder="Describe your community"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Creating...' : 'Create Community'}
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateC;
