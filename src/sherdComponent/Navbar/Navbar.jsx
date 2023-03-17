import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <nav className="nav-outsider">
      <div className="nav container">
        <div className="nav-header">
          <div className="nav-title">Quadb Tach</div>
        </div>
        <div className="nav-btn">
          <div className="nav-icon-wrap">
            {!navToggle ? (
              <AiOutlineMenu
                onClick={handleNavToggle}
                className="nav-icon nav-open-icon"
              />
            ) : (
              <AiOutlineClose
                onClick={handleNavToggle}
                className="nav-icon nav-close-icon"
              />
            )}
          </div>
        </div>

        <div
          class={`nav-links ${
            navToggle ? "nav-links-open" : "nav-links-close"
          }`}
        >
          <Link to="/">Github</Link>
          <Link to="/">Github</Link>
          <Link to="/">Github</Link>
          <Link to="/">Github</Link>
          <Link to="/">Github</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
