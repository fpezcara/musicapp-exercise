import React from 'react';
import "../../App.css";
import  Artists  from "../ArtistsPage";

const IndexPage = () => {
    
    return (
        <div className="App">
            <h1>I am an index page!</h1>
          <h1>Music App</h1>
          <Artists />
        </div>
      );
}

export default IndexPage;
