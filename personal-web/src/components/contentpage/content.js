import React from "react";
import { Cards } from "../card/card";
import '../contentpage/content.css';

export function Content () {
 return (
  <div className="contentContainer">
    <div className="divider">
      <h4>This is my current work</h4>
    </div>
    <div className="works">
        <Cards/>
    </div>
    
  </div>
 )
};