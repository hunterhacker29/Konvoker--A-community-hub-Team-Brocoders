import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/communitypage.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { db, storage } from '../server/Firebase';

export default function Communitypage() {
  const { communityId } = useParams();
  const [communityData, setCommunityData] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const docRef = doc(db, 'communities', communityId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          let data = docSnap.data();

          // Fetch profile picture URL
          if (data.profilePicUrl) {
            const profilePicRef = ref(storage, data.profilePicUrl);
            const profilePicUrl = await getDownloadURL(profilePicRef);
            data = { ...data, profilePicUrl };
          }

          // Fetch banner URL
          if (data.bannerUrl) {
            const bannerRef = ref(storage, data.bannerUrl);
            const bannerUrl = await getDownloadURL(bannerRef);
            data = { ...data, bannerUrl };
          }

          setCommunityData(data);
          fetchBlogs(); // Fetch blogs after fetching community data
        } else {
          console.log('No such community document!');
        }
      } catch (error) {
        console.error('Error fetching community:', error);
      } finally {
        setLoading(false);
      }
    };

    if (communityId) {
      fetchCommunityData();
    }
  }, [communityId]);

  const fetchBlogs = async () => {
    try {
      const blogsRef = collection(db, `communities/${communityId}/Blogs`);
      const q = query(blogsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedBlogs = [];

      querySnapshot.forEach((doc) => {
        fetchedBlogs.push({ id: doc.id, ...doc.data() });
      });

      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div id='sde'>
        <div>
          <Sidebar />
        </div>
        <div id="bdy">
          <div className="banner">
            {communityData && communityData.bannerUrl && (
              <img src={communityData.bannerUrl} alt="Community Banner" id='banimg'/>
            )}
          </div>

          <div className="d-flex align-items-center">
            <div id="com-pfp">
              {communityData && communityData.profilePicUrl && (
                <img src={communityData.profilePicUrl} alt="Community Profile" id='pfpimg'/>
              )}
            </div>
            <div>
              <h2>{communityData?.name}</h2>
              <p>{communityData?.description}</p>
            </div>
            <div className="actions d-flex ms-auto">
              <div className="join-button me-2">
                <button type="button" className="btn btn-primary">Join Community</button>
              </div>
              <div className="create-post-button">
                <Link to={`/communities/${communityId}/createpost`} className="btn btn-secondary">Create Post</Link>
              </div>
            </div>
          </div>
          
          <div className="container">
            {blogs.map((blog) => (
              <div key={blog.id} className="card mb-3">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <div className="userpfp"></div>
                    <div className="Uname-postedtime">
                      <strong>{blog.author}</strong>
                      <br />
                      <span className="text-muted">{new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{blog.title}</h4>
                  <p className="card-text">{blog.text}</p>

                  {blog.images && blog.images.length > 0 && (
                    <div className="post-img mt-3">
                      {blog.images.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Image ${index}`} className="img-fluid" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <div>No blogs found in this community.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

