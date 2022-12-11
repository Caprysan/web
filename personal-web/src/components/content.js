import React from "react";
import { Footer } from "./footer";

export function Content () {
 return (
  <div className="contentContainer">
    <div className="divider">
      <h4>This is my current work</h4>
    </div>
    <div className="works">
        <div className="worksInfo col-xl-4 col-sm-3">
          <p>title works</p>
          <p>product name</p>
          <p>detail works</p>
        </div>
        <div className="worksPic col-xl-8 col-sm-12">
          <img src="https://picsum.photos/765/500?grayscale" />
        </div>
    </div>
    {/* <div className="footerContainer container-fluid">
      <Footer/>
    </div> */}
  </div>
 )
};