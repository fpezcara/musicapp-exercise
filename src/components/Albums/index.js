import React from 'react'

const Albums = () => {

  const pinkAlbums = [
    {
      name: "Beautiful trauma",
      releaseDate: 2017,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/PINK_-_Beautiful_Trauma_%28Official_Album_Cover%29.png/220px-PINK_-_Beautiful_Trauma_%28Official_Album_Cover%29.png",
    },
    {
      name: "The truth about love",
      releaseDate: 2012,
      cover: "https://kbimages1-a.akamaihd.net/fbf25d3e-d2d5-458e-92a7-9e64b181a077/1200/1200/False/pink-the-truth-about-love-songbook.jpg",
    },
    {
      name: "All I know so far",
      releaseDate: 2021,
      cover: "https://m.media-amazon.com/images/I/91D3tFa8GTS._AC_SY355_.jpg",
    },
  ];

  const kaliAlbums = [
    {
      name: "Isolation",
      releaseDate: 2018,
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Kali_Uchis_-_Isolation.png/220px-Kali_Uchis_-_Isolation.png",
    },
    {
      name: `Sin Miedo (del Amor y Otros Demonios)`,
      releaseDate: 2020,
      cover: "https://i.etsystatic.com/26765651/r/il/ab1a16/2935604097/il_fullxfull.2935604097_glst.jpg",
    }
  ];


  return (
    <div>
      <ul>
      {pinkAlbums.map ( (album) => {  
        // console.log("pinkAlbums", album.cover)
        const srcA = album.cover;
        return  
        <>        
        <li><img src={srcA}></img></li>
        <li>- {album.name}</li> 
        </> 
       }) }
      </ul>
    </div>
  )
}

export default Albums;
