import React from "react";
import { NavLink} from "react-router-dom";

export function Header () {
  let activeClassName = "nowActive";


  return (
    <div className="header-container">
      <div className="logo"><h4><span>Caps.</span></h4></div>
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