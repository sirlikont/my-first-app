import React from 'react';
// import styles from './styles.css'
import { Link } from 'react-router-dom';

 function NavbarComponent() {
    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <img src="https://apprecs.org/ios/images/app-icons/256/20/921456160.jpg" className="img-thumbnail"
            alt="logo of Pipedrive" width="60" height="40" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#expandNavbar"
            aria-controls="expandNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="expandNavbar">
            <div className="navbar-nav">
              <Link to="/tribes"><h2>Tribes</h2></Link>
              <Link to="/employees" ><h2>Employees</h2></Link>
            </div>
          </div>
        </div>
      </nav>

 )
}

export default NavbarComponent;