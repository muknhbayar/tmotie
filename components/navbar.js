import React from "react";

const navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <a href="./index.html" className="brand">
              Brand
            </a>
            <div className="burger" id="burger">
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </div>
            <span className="overlay" />
            <div className="menu" id="menu">
              <ul className="menu-inner">
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Home
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Service
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Project
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <a href="./index.html" className="menu-block">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default navbar;
