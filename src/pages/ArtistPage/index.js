import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Albums from "../AlbumsPage";

const Artist = ({ artist }) => {
  console.log(artist);

  const [isShown, setIsShown] = useState(false);

  const handelAlbums = (event) => {
    event.preventDefault();
    setIsShown((current) => !current);
  };

  return (
    <div className="single-artist">
      <li>{artist.name}</li>
      <li>{artist.bio}</li>
      <li>Geners: </li>
      {artist.genres.map((genre) => {
        return <li>- {genre}</li>;
      })}
      <Link to={`/artists/${artist.name}`}>See albums </Link>
      {isShown && <Albums artistName={artist.name} />}
      {/* <Albums artistName={artist.name}/> */}
    </div>
  );
};

// const Artist = () => {
//     let {artistName} = useParams();
//     return <h1>I display information about {artistName}!</h1>
// }

export default Artist;
