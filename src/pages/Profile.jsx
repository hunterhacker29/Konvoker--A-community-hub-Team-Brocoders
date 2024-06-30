// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { db } from '../server/Firebase';
// import { doc, getDoc } from 'firebase/firestore';
// import { auth } from '../server/Firebase';
// import { Link } from 'react-router-dom';
// import '../styles/profile.css'

// function Profile() {
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userEmail, setUserEmail] = useState('');

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           setUserEmail(user.email); // Set user's email to state

//           const docRef = doc(db, 'profiles', user.email); // Use user.email directly
//           const docSnap = await getDoc(docRef);

//           if (docSnap.exists()) {
//             setProfileData(docSnap.data());
//           } else {
//             console.log('No such document!');
//           }
//         } else {
//           console.log('User not logged in.');
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching document: ', error);
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!profileData) {
//     return <p>No profile data found.</p>;
//   }

//   const interestsList = Array.isArray(profileData.interests) ? profileData.interests : [];

//   return (
//     <>
//       <Navbar />
//       <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
//         <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
//           <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
//             <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
//           </div>
//           <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//             My Communities
//           </div>
//           <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//             <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
//           </div>
//           <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom: '1px solid rgb(150,150,150)', color: 'white' }}>
//             <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
//           </div>
//           <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//             Joined Communities
//           </div>
//           <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//             <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
//           </div>
//           <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom: '1px solid rgb(150,150,150)', color: 'white' }}>
//             <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
//           </div>
//           <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//             All Communities
//           </div>
//           <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//             <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
//           </div>
//           {/* Add more communities as needed */}
//         </div>

//         <div className="profile-container">
//           <div>
//             <img
//               src={profileData.profilePic || 'https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg'}
//               alt="Profile Picture"
//               className="profile-picture"
//             />
//             <div className="info-section">
//               <h3 className="user-h2">{profileData.fname} {profileData.lname}</h3>
//               <div className="user-info">
//                 <div className="user-detail">
//                   <li className="user-li"><i className="fas fa-calendar"></i> {new Date(profileData.dob?.toDate()).toLocaleDateString()}</li>
//                 </div>
//                 <div className="user-detail">
//                   <h3 className="user-h3">Email:</h3>
//                   <li className="user-li"><i className="fas fa-envelope"></i> {profileData.email}</li>
//                   <li className="user-li"><i className="fas fa-link"></i> <a href={profileData.website}>{profileData.website}</a></li>
//                 </div>
//               </div>
//               <div className="about-me">
//                 <h3 className="user-h3">About Me:</h3>
//                 <p className="user-p">{profileData.aboutUs}</p>
//               </div>
//               <div className="interests">
//                 <h3 className="user-h3">Interests:</h3>
//                 <ul className="user-ul">
//                   {interestsList.map((interest, index) => (
//                     <li className="user-li" key={index}>{interest}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="social-media">
//                 <h3 className="user-h3">Follow Me On:</h3>
//                 <ul className="user-ul">
//                   {profileData.socialMedia && Object.entries(profileData.socialMedia).map(([platform, link]) => (
//                     <li className="user-li" key={platform}><i className="i-link"></i> <a href={link}>{platform}</a></li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;


// // import React, { useState, useEffect } from 'react';
// // import Navbar from '../components/Navbar';
// // import { db } from '../server/Firebase';
// // import { doc, getDoc } from 'firebase/firestore';
// // import { auth } from '../server/Firebase';
// // import { Link } from 'react-router-dom';

// // function Profile() {
// //   const [profileData, setProfileData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProfileData = async () => {
// //       try {
// //         const user = auth.currentUser;
// //         if (user) {
// //           const docRef = doc(db, 'profiles', user.email);
// //           const docSnap = await getDoc(docRef);

// //           if (docSnap.exists()) {
// //             setProfileData(docSnap.data());
// //           } else {
// //             console.log('No such document!');
// //           }
// //         } else {
// //           console.log('User not logged in.');
// //         }

// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching document: ', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchProfileData();
// //   }, []);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (!profileData) {
// //     return <p>No profile data found.</p>;
// //   }

// //   const interestsList = Array.isArray(profileData.interests) ? profileData.interests : [];

// //   return (
// //     <>
// //       <Navbar />
// //       <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
// //         <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
// //           <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
// //             <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
// //           </div>
// //           <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// //             My Communities
// //           </div>
// //           {/* Add your community links here */}
// //         </div>

// //         <div className="profile-container">
// //           <img
// //             src={profileData.profilePic || 'https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg'}
// //             alt="Profile Picture"
// //             className="profile-picture"
// //           />
// //           <div className="info-section">
// //             <h3 className="user-h2">{profileData.fname} {profileData.lname}</h3>
// //             <div className="user-info">
// //               <div className="user-detail">
// //                 <li className="user-li"><i className="fas fa-calendar"></i> {new Date(profileData.dob?.toDate()).toLocaleDateString()}</li>
// //               </div>
// //               <div className="user-detail">
// //                 <h3 className="user-h3">Email:</h3>
// //                 <li className="user-li"><i className="fas fa-envelope"></i> {profileData.email}</li>
// //                 <li className="user-li"><i className="fas fa-link"></i> <a href={profileData.website}>{profileData.website}</a></li>
// //               </div>
// //             </div>
// //             <div className="about-me">
// //               <h3 className="user-h3">About Me:</h3>
// //               <p className="user-p">{profileData.aboutUs}</p>
// //             </div>
// //             <div className="interests">
// //               <h3 className="user-h3">Interests:</h3>
// //               <ul className="user-ul">
// //                 {interestsList.map((interest, index) => (
// //                   <li className="user-li" key={index}>{interest}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div className="social-media">
// //               <h3 className="user-h3">Follow Me On:</h3>
// //               <ul className="user-ul">
// //                 {profileData.socialMedia && Object.entries(profileData.socialMedia).map(([platform, link]) => (
// //                   <li className="user-li" key={platform}><i className="i-link"></i> <a href={link}>{platform}</a></li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Profile;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { db } from '../server/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../server/Firebase';
import { Link } from 'react-router-dom';
import '../styles/profile.css';

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setUserEmail(user.email); // Set user's email to state

          const docRef = doc(db, 'profiles', user.email); // Use user.email directly
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('User not logged in.');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching document: ', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profileData) {
    return <p>No profile data found.</p>;
  }

  const interestsList = Array.isArray(profileData.interests) ? profileData.interests : [];

  return (
    <>
      <Navbar />
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
          <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
          </div>
          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            My Communities
          </div>
          {/* Add your community links here */}
        </div>

        <div className="profile-container">
          <div>
            <img
              src={profileData.profilePic || 'https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg'}
              alt="Profile Picture"
              className="profile-picture"
            />
            <div className="info-section">
              <h3 className="user-h2">{profileData.fname} {profileData.lname}</h3>
              <div className="user-info">
                <div className="user-detail">
                  <li className="user-li"><i className="fas fa-calendar"></i> {new Date(profileData.dob?.toDate()).toLocaleDateString()}</li>
                </div>
                <div className="user-detail">
                  <h3 className="user-h3">Email:</h3>
                  <li className="user-li"><i className="fas fa-envelope"></i> {profileData.email}</li>
                  <li className="user-li"><i className="fas fa-link"></i> <a href={profileData.website}>{profileData.website}</a></li>
                </div>
              </div>
              <div className="about-me">
                <h3 className="user-h3">About Me:</h3>
                <p className="user-p">{profileData.aboutUs}</p>
              </div>
              <div className="interests">
                <h3 className="user-h3">Interests:</h3>
                <ul className="user-ul">
                  {interestsList.map((interest, index) => (
                    <li className="user-li" key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
              <div className="social-media">
                <h3 className="user-h3">Follow Me On:</h3>
                <ul className="user-ul">
                  {profileData.socialMedia && Object.entries(profileData.socialMedia).map(([platform, link]) => (
                    <li className="user-li" key={platform}><i className="i-link"></i> <a href={link}>{platform}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;