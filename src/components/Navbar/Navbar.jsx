import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../AuthContextProvier";
import Firebase from "../Firebase";
import "./Navbar.css";
import "./nav-overlay.css";

function Navbar({ history }) {
  const { currentUser, data } = useContext(AuthContext);
  // console.log(currentUser);
  const logOut = () => {
    Firebase.auth()
      .signOut()
      .then(r => history.push("/"));
  };
  const [height, setHeight] = useState(0);
  const closeNav = () => {
    setHeight(0);
  };

  return (
    <div>
      <div style={{ height: height + "%" }} id="myNav" className="overlay">
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
          <NavLinks closeNav={closeNav} />
          {currentUser ? (
            <a
              onClick={() => {
                closeNav();
                logOut();
              }}
            >
              LogOut
            </a>
          ) : (
            <Link to="/logIn" onClick={closeNav}>
              LogIn
            </Link>
          )}
          <a href="#"></a>
        </div>
      </div>
      <nav>
        <div className="container">
          <div className="shoping-bag">
            <i className="fa fa-shopping-bag" />
          </div>
          <Link to="/" className="nav-header">
            <span className="nav-header-1"> Infinite</span>
            <span className="nav-header-2">Selection</span>
          </Link>
          <div className="nav-links">
            <NavLinks closeNav={closeNav} />
          </div>
          <div className="nav-sublink">
            {currentUser ? (
              <div className="nav-login">
                {data ? (
                  <div>
                    {data.firstName}
                    {data.lastName}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link to="/login" className="nav-login">
                Login
              </Link>
            )}
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

export default withRouter(Navbar);

function NavLinks({ closeNav }) {
  return (
    <React.Fragment>
      <Link className="nav-link" onClick={closeNav} to="/browse">
        Browse Sneakers
      </Link>
      <a className="nav-link" href="#">
        How We Clean
      </a>
      <a className="nav-link" href="#">
        Ways to Rent
      </a>
      <a className="nav-link" href="#">
        Authenticity Guarantee
      </a>
    </React.Fragment>
  );
}
