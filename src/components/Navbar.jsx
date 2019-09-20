import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./nav-overlay.css";

function Navbar() {
  const [height, setHeight] = useState(0);
  const closeNav = () => {
    setHeight(0);
  };
  return (
    <div>
      {/* The overlay */}
      <div style={{ height: height + "%" }} id="myNav" className="overlay">
        {/* Button to close the overlay navigation */}
        <div className="overlay-nav">
          <div className="shoping-bag">
            <i className="fa fa-shopping-bag" />
          </div>
          <div className="nav-header">
            <Link to="/">
              <span className="nav-header-1"> Infinite</span>
              <span className="nav-header-2">Selection</span>
            </Link>
          </div>
          <a className="closebtn" onClick={closeNav}>
            ×
          </a>
        </div>
        {/* Overlay content */}
        <div className="overlay-content">
          <Link onClick={closeNav} to="/browse">
            Browse Sneakers
          </Link>
          <a href="#">How We Clean</a>
          <a href="#">Ways to Rent</a>
          <a href="#">Authenticity Guarantee</a>
          <a href="#">Login</a>
        </div>
      </div>
      <nav>
        <div className="container">
          <div className="shoping-bag">
            <i className="fa fa-shopping-bag" />
          </div>
            <Link to="/" className="nav-header" >
              <span className="nav-header-1"> Infinite</span>
              <span className="nav-header-2">Selection</span>
            </Link>
          <div className="nav-links">
            <Link to="/browse" className="nav-link">
              Browse Sneakers
            </Link>
            <div>How We Clean</div>
            <div>Ways to Rent</div>
            <div>Authenticity Guarantee</div>
          </div>
          <div className="nav-sublink">
            <div className="nav-login">Login</div>
            <div className="search-box">
              <input
                className="search-txt"
                type="search-text"
                name="search-txt"
                placeholder="Type to search"
              />
              <a className="search-btn" href="#">
                <i className="fa fa-search" />
              </a>
            </div>
            <div>
              <i className="fa fa-shopping-bag" />
            </div>
          </div>
          <div className="hambuger">
            <i onClick={() => setHeight(100)} className="fa fa-bars" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
