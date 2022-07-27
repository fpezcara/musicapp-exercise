import React from "react";
import Layout from "./layouts";
import { IndexPage, ArtistPage, ArtistsPage, AlbumsPage} from './pages'

import { Routes, Route } from "react-router-dom";

const App = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>             
              <Route path="/" element={<IndexPage />}> </Route> 
              <Route path="/artists">
                 <Route path="/artists" element={<ArtistsPage />}> </Route>
                 <Route path=":artistName" element={<AlbumsPage />}> </Route>
                 {/* <Route path=":artistAlbums" element={<AlbumsPage />}> </Route> */}
              </Route> 
           </Route> 
         </Routes>         
    )
    
}

export default App;
