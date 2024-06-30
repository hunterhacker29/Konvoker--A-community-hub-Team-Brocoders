

// // // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { db } from '../server/Firebase'; // Ensure the correct path
// // // import { collection, getDocs } from 'firebase/firestore';

// // // function Sidebar() {
// // //   const [communities, setCommunities] = useState([]);

// // //   useEffect(() => {
// // //     const fetchCommunities = async () => {
// // //       try {
// // //         const querySnapshot = await getDocs(collection(db, 'communities'));
// // //         const communityList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //         setCommunities(communityList);
// // //       } catch (error) {
// // //         console.error('Error fetching communities: ', error);
// // //       }
// // //     };

// // //     fetchCommunities();
// // //   }, []);

// // //   return (
// // //     <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
// // //       <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
// // //         <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
// // //           <Link to="/community/create" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
// // //         </div>
// // //         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// // //           My Communities
// // //         </div>
// // //         <div>
// // //           {communities.map((community) => (
// // //             <div key={community.id} style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// // //               <Link to={`/community/${community.id}`} className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>{community.name}</Link>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <hr />
// // //          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// // //          Joined Communities
// // //          </div>
// // //          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// // //            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
// // //          </div>
// // //          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom: '1px solid rgb(150,150,150)', color: 'white' }}>
// // //            <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
// // //          </div>
// // //          <hr />
// // //          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// // //            All Communities
// // //          </div>
// // //          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// // //            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
// // //          </div>
       
// // //        </div>
// // //       </div>
    
// // //   );
// // // }

// // // export default Sidebar;
// // import { IoIosArrowDropdown } from "react-icons/io";
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { db } from '../server/Firebase'; // Ensure the correct path
// // import { collection, getDocs } from 'firebase/firestore';

// // function Sidebar() {
// //   const [communities, setCommunities] = useState([]);
// //   const [showCommunities, setShowCommunities] = useState(false);
// //   const [showJoinedCommunities, setShowJoinedCommunities] = useState(false);

// //   useEffect(() => {
// //     const fetchCommunities = async () => {
// //       try {
// //         const querySnapshot = await getDocs(collection(db, 'communities'));
// //         const communityList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setCommunities(communityList);
// //       } catch (error) {
// //         console.error('Error fetching communities: ', error);
// //       }
// //     };

// //     fetchCommunities();
// //   }, []);

// //   const toggleCommunityDropdown = () => {
// //     setShowCommunities(!showCommunities);
// //   };

// //   const toggleJoinedCommunityDropdown = () => {
// //     setShowJoinedCommunities(!showJoinedCommunities);
// //   };

// //   return (
// //     <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
// //       <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
// //         <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
// //           <Link to="/community/create" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
// //         </div>
// //         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 50, color: 'white', cursor: 'pointer' }} onClick={toggleCommunityDropdown}>
// //           <span>&nbsp;My Communities &nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowDropdown /></span>
          
// //         </div>
// //         {showCommunities && (
// //           <div>
// //             {communities.map((community) => (
// //               <div key={community.id} style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// //                 <Link to={`/community/${community.id}`} className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>{community.name}</Link>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }} />
// //         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 50, color: 'white', cursor: 'pointer' }} onClick={toggleJoinedCommunityDropdown}>
// //           <span>
            
// //           Joined Communities <IoIosArrowDropdown /></span>
         
// //         </div>
// //         {showJoinedCommunities && (
// //           <div>
// //             <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// //               <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
// //             </div>
// //             <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50 }}>
// //               <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
// //             </div>
// //           </div>
// //         )}
// //         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }} />
// //         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// //           All Communities
// //         </div>
// //         <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
// //           <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Sidebar;

// import { IoIosArrowDropdown } from "react-icons/io";
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { db } from '../server/Firebase';
// import { collection, getDocs } from 'firebase/firestore';

// function Sidebar() {
//   const [communities, setCommunities] = useState([]);
//   const [showCommunities, setShowCommunities] = useState(false);
//   const [showJoinedCommunities, setShowJoinedCommunities] = useState(false);

//   useEffect(() => {
//     const fetchCommunities = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'communities'));
//         const communityList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setCommunities(communityList);
//       } catch (error) {
//         console.error('Error fetching communities: ', error);
//       }
//     };

//     fetchCommunities();
//   }, []);

//   const toggleCommunityDropdown = () => {
//     setShowCommunities(!showCommunities);
//   };

//   const toggleJoinedCommunityDropdown = () => {
//     setShowJoinedCommunities(!showJoinedCommunities);
//   };

//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
//       <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: 10, backgroundColor: '#221e1e', zIndex: 1 }}>
//         <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
//           <Link to="/community/create" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
//         </div>
//         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 50, color: 'white', cursor: 'pointer' }} onClick={toggleCommunityDropdown}>
//           <span>My Communities <IoIosArrowDropdown /></span>
//         </div>
//         {showCommunities && (
//           <div>
//             {communities.map((community) => (
//               <div key={community.id} style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//                 <Link to={`/community/${community.id}`} className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>{community.name}</Link>
//               </div>
//             ))}
//           </div>
//         )}
//         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }} />
//         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 50, color: 'white', cursor: 'pointer' }} onClick={toggleJoinedCommunityDropdown}>
//           <span>Joined Communities <IoIosArrowDropdown /></span>
//         </div>
//         {showJoinedCommunities && (
//           <div>
//             <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//               <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
//             </div>
//             <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50 }}>
//               <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
//             </div>
//           </div>
//         )}
//         <hr style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }} />
//         <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//           All Communities
//         </div>
//         <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
//           <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import { IoIosArrowDropdown } from "react-icons/io";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../server/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/sidebar.css'; // Import your CSS file

function Sidebar() {
  const [communities, setCommunities] = useState([]);
  const [showCommunities, setShowCommunities] = useState(false);
  const [showJoinedCommunities, setShowJoinedCommunities] = useState(false);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'communities'));
        const communityList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCommunities(communityList);
      } catch (error) {
        console.error('Error fetching communities: ', error);
      }
    };

    fetchCommunities();
  }, []);

  const toggleCommunityDropdown = () => {
    setShowCommunities(!showCommunities);
  };

  const toggleJoinedCommunityDropdown = () => {
    setShowJoinedCommunities(!showJoinedCommunities);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <Link to="/community/create" className="sidebar-link">CREATE +</Link>
        </div>
        <div className="sidebar-section" onClick={toggleCommunityDropdown}>
          <span className="sidebar-text">My Communities <IoIosArrowDropdown /></span>
          {showCommunities && (
            <div className="dropdown-content">
              {communities.map((community) => (
                <Link key={community.id} to={`/community/${community.id}`} className="sidebar-link">{community.name}</Link>
              ))}
            </div>
          )}
        </div>
        <hr className="sidebar-divider" />
        <div className="sidebar-section" onClick={toggleJoinedCommunityDropdown}>
          <span className="sidebar-text">Joined Communities <IoIosArrowDropdown /></span>
          {showJoinedCommunities && (
            <div className="dropdown-content">
              <Link to="/community/comm1" className="sidebar-link">COMM1</Link>
              <Link to="/community/comm2" className="sidebar-link">COMM2</Link>
            </div>
          )}
        </div>
        <hr className="sidebar-divider" />
        <div className="sidebar-section">
          <span className="sidebar-text">All Communities</span>
          <div className="dropdown-content">
            <Link to="/community/comm1" className="sidebar-link">COMM1</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
