import React from "react";
import { Link } from "react-router-dom";

export function Header () {
  return (
    <div className="header-cointainer">
        <ul>
          <li><Link to="/casestudies">Case Studies</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/photoworks">PhotoWorks</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact me</li>
          <li>home</li>
        </ul>
    </div>
  )
};