import React from "react";
import { Contens } from "../components/content";

function Home () {
  return (
    <div className="homeContainer container-fluid"> 
      <div className="hero container">
        <h2>Hello, I'm Caprysan Sinaga, </h2>
      </div>
      <div>
        <Contens/>
      </div>
    </div>
  
  )
};

export default Home;