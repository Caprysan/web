import React from "react";

export function Content () {
 return (
  <>
    <h4>This is my current work</h4>
    <div className="container contentContainer"> 
      <div className="worksInfo col-xl-6">
        <p>title works</p>
        <p>product name</p>
        <p>detail works</p>
      </div>
      <div className="worksPic col-xl-6">
        <img src="https://picsum.photos/765/500?grayscale" />
      </div>
    </div>
  </>
 )
};