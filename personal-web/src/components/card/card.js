import React from "react";
import '../card/card.css';

export function Cards () {
  return(
    <div className="cardBody">
    <div className="cardImage">
      <img className="imgCard" src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="test" />   
    </div>
    <div className="cardDetail">
      <h2>Title name</h2>
      <h4>Subtitle</h4>
      <h4> type project : team project</h4>
      <p>This is body description, which will describe what the project is.</p>
    </div>
  </div>
  )
  
  
};