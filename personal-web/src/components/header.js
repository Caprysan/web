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
          <div><NavLink to="/works" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }s>Works</NavLink></div>
          <div><NavLink to="/about" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }>About</NavLink></div>
          <div><NavLink to="/photoworks" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }>Contact</NavLink></div>
          <div><NavLink to="/galery" className={({ isActive }) =>
              isActive ? activeClassName : "inactive"
            }>Galery</NavLink></div>
            <div>Resume</div>
        </div>
    </div>
  )
};