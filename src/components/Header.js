import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <img src="/logo.png" alt="Hooks News Logo" className="logo" />
        <NavLink to="/" className="header-title">
          Hooks News
        </NavLink>
        <NavLink to="/" className="header-link">
          new
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/top" className="header-link">
          top
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/search" className="header-link">
          Search
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/submit" className="header-link">
          Submit
        </NavLink>
      </div>
      <div className="navbar">
        <NavLink to="/login" className="header-link">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Header);
