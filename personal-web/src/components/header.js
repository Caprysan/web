import React, { useEffect } from "react";
import { NavLink, Link} from "react-router-dom";

export function Header () {
  let activeClassName = "nowActive";
  

  return (
    <div className="header-container">
      <div className="logo">
      <Link to="/">
        <div className="dot"></div><h2>Caps</h2>  
      </Link>
      </div>
        <div className="navlinks">
          <div><NavLink to="/casestudies" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }s>Case Studies</NavLink></div>
          <div><NavLink to="/projects" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }>Projects</NavLink></div>
          <div><NavLink to="/photoworks" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }>PhotoWorks</NavLink></div>
          <div><NavLink to="/about" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }>About</NavLink></div>
        </div>
    </div>
  )
};