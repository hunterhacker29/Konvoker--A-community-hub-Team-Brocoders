import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: 'rgb(15, 15, 15) 0px 0px 5px', backgroundColor: '#343a40' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="https://w1.pngwing.com/pngs/657/530/png-transparent-circle-design-logo-economic-development-community-organization-community-development-charitable-organization-software-testing-thumbnail.png" alt="Logo" style={{ width: 50, height: 'auto' }} />
            <span className="ms-2">Local Engagement Hub</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
          
            </ul>
            <form className="d-flex ms-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
