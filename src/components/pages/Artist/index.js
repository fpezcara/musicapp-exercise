import React from "react";
import {useState} from "react";
import Albums from "../Albums";

const Artist = ({artist}) => {

  
  const [isShown, setIsShown ] = useState(false);
  

  const handelAlbums = event =>  {
    event.preventDefault();
    setIsShown(current => !current)
    
  }
  

  return (
    <div className="single-artist">
      <li>{artist.name}</li>
      <li>{artist.bio}</li>
      <li>Geners: </li>
      {artist.genres.map ( (genre) => {  
        return <li>- {genre}</li>
       }) }
       <button onClick={handelAlbums}>See albums </button>
       {isShown && <Albums artistName={artist.name}/>}
    </div>
  );
};

export default Artist;
