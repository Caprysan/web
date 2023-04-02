import React from "react";
import { Content } from "../components/contentpage/content";

function Home () {
  return (
    <div className="homeContainer container-fluid"> 
      <div className="hero container">
        <div className="textHero"> 
          <h2>Hello, I'm Caprysan Sinaga! </h2>
          <p>you can call me Capry or Caps. 
            I love in designing, I’m front-end developer
            and UI/UX Designer. I’m passionate in photography,
            Visit my galery..</p>
        </div>
        
      </div>
      <div className="content container">
        <Content/>
      </div>
    </div>
  
  )
};

export default Home;