import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'sticky', top: 0, height: '100%', overflowY: 'auto', borderRight: '1px solid white', padding: '10px', backgroundColor: '#221e1e', zIndex: 1 }}>
          <div style={{ fontSize: '18px', margin: 0, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgb(150,150,150)', justifyContent: 'center', height: 50, color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>CREATE +</Link>
          </div>
          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            My Communities
          </div>
          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
          </div>
          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom: '1px solid rgb(150,150,150)', color: 'white' }}>
            <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
          </div>
          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            Joined Communities
          </div>
          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
          </div>
          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, borderBottom: '1px solid rgb(150,150,150)', color: 'white' }}>
            <Link to="/community/comm2" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM2</Link>
          </div>
          <div style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
          
          </div>
          <div style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, color: 'white' }}>
            <Link to="/community/comm1" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>COMM1</Link>
          </div>
          {/* Add more communities as needed */}
        </div>

        <div className="container">
          
          <img src= "https://assets-global.website-files.com/64929efd54274f9c46567768/650413ebfba4de30607e86ef_Three%20types%20of%20community%20engagement%20info%20(1).jpeg"></img>
          {/* Replace with your main content */}
        </div>
      </div>
    </>
  );
}

export default Home;

