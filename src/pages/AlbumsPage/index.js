import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

const Albums = () => {

  const pinkAlbums = [
    {
      name: "Beautiful trauma",
      releaseDate: 2017,
      songs: ["Beautiful trauma", "Whatever you want", "For now" ], 
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/PINK_-_Beautiful_Trauma_%28Official_Album_Cover%29.png/220px-PINK_-_Beautiful_Trauma_%28Official_Album_Cover%29.png",
    },
    {
      name: "The truth about love",
      releaseDate: 2012,
      songs: ["Are we all we are", "True love", "Blow me (One last kiss)" ], 
      cover: "https://images-eu.ssl-images-amazon.com/images/I/81a66iIiZeL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      name: "All I know so far",
      releaseDate: 2021,
      songs: ["Just like a pill"], 
      cover: "https://m.media-amazon.com/images/I/91D3tFa8GTS._AC_SY355_.jpg",
    },
  ];

  // const kaliAlbums = [
  //   {
  //     name: "Isolation",
  //     releaseDate: 2018,
  //     cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Kali_Uchis_-_Isolation.png/220px-Kali_Uchis_-_Isolation.png",
  //   },
  //   {
  //     name: `Sin Miedo (del Amor y Otros Demonios)`,
  //     releaseDate: 2020,
  //     cover: "https://i.etsystatic.com/26765651/r/il/ab1a16/2935604097/il_fullxfull.2935604097_glst.jpg",
  //   }
  // ];

  const [isShownSongs, setIsShownSongs ] = useState(false);
  const [isShownLyrics, setIsShownLyrics ] = useState("");
  const [lyrics, setLyrics ] = useState("");


  //  async function axiosGetLyrics () {
  //   const fetchAPI = `https://api.lyrics.ovh/v1/pink/${isShownLyrics}`;
  //   console.log(fetchAPI);
  //   try {
  //     const response = await axios.get(fetchAPI);
  //     console.log(response.data)
  //     // const lyricsData = response.data.map(lyrics => lyrics.n)

  //   } catch (err){
  //     console.log(err)
  //   }
  // }
  
  useEffect ( () => {
    async function axiosGetLyrics () {
      const fetchAPI = `https://api.lyrics.ovh/v1/pink/${isShownLyrics}`;
      console.log(fetchAPI);
      try {
        const response = await axios.get(fetchAPI);
        console.log(response.data)
        // const lyricsData = response.data.map(lyrics => lyrics.n)  
      } catch (err){
        console.log(err)
      }
    }
    axiosGetLyrics();
  }, [isShownLyrics])
 

  const handelSongs = event =>  {
    event.preventDefault();
    setIsShownSongs(current => !current)    
  }

  const handelLyrics = event =>  {
    event.preventDefault();    
    const eventText = event.target.textContent;
    const lyrics = eventText.replace(/\s/g, '%20')
    // console.log("lyrics ", lyrics)
    setIsShownLyrics(lyrics)    
  }

  return (
    <div>
      <ul>
      {pinkAlbums.map ( (album) => { 
       return(
        <>
          <li>Album: {album.name}</li>
          <li>
            <button onClick={handelSongs}><img src={album.cover} /></button>
          </li>          
          {isShownSongs && <li>Song: {album.songs.map((song) => <p onClick={handelLyrics}>{song}</p>)}</li>}
        </>
        )
       }) }
      </ul>
    </div>
  )
}

export default Albums;
