import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/comm.css';
import Blogcard from './Blogcard';
import Sidebar from './Sidebar'; // Make sure Sidebar is imported correctly

function Community() {
  return (
    <>
      {/* Navbar component (needs proper configuration) */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Navbar>

      {/* Sidebar component */}
      <Sidebar />

      {/* Main content */}
      <div className="main-content">
        <div className="banner">
          <h1>r/AiBuilders</h1>
        </div>

        <div id="com-pfp"></div>
        <div id="com-desc">
          sexy Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque veniam provident voluptates. Quia dolorum corporis officia sit architecto quas eius facere consequuntur excepturi. Rerum odio beatae quam ducimus, illum dolore!
          <hr />
        </div>

        
      </div>
    </>
  );
}

export default Community;
