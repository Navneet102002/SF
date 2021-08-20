import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand" style={{color: "white"}} >The Sparks Foundation Bank</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <span class="navbar-text">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link active" style={{color: "white"}}>Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/customers" class="nav-link" style={{color: "white"}}>Customers</Link>
            </li>
            <li class="nav-item">
              <Link to="/transfers" class="nav-link" style={{color: "white"}}>History</Link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </nav>
}

export default Navbar;