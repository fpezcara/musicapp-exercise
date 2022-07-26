import React from "react";
import Artist from "../Artist";

const Artists = () => {
  const artists = [
    {
      name: "Pink",
      genres: ["pop", "rock", "RnB"],
      bio: "Alecia Beth Moore, known professionally as Pink, is an American singer, songwriter, actress and dancer. She was originally a member of the girl group Choice. In 1995, LaFace Records saw potential in Pink and offered her a solo recording contract.",
    }
    // {
    //   name: "Kali Uchis",
    //   genres: ["neo soul", "hip hop", "RnB", "reggaeton"],
    //   bio: "Karly-Marina Loaiza, known professionally as Kali Uchis, is an American singer. She released her debut mixtape, Drunken Babble, in 2012, which was followed by her debut EP, Por Vida, released in 2015. In 2018, Uchis released her debut studio album Isolation to widespread acclaim.",
    // },
  ];

  return (
    <div>
      <ul>
        {artists.map((artist) => (
          <Artist artist={artist} />
        ))}
      </ul>
    </div>
  );
};

export default Artists;
