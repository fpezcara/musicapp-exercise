import React from "react";

const Artist = ({artist}) => {
  return (
    <div className="single-artist">
      <li>{artist.name}</li>
      <li>{artist.bio}</li>
    </div>
  );
};

export default Artist;
