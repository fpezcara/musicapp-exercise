import React from "react";
import Layout from ".components/layouts";
import { IndexPage, AboutPage, UsersPage, UserPage} from './pages'

import { Routes, Route } from "react-router-dom";const App = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>             
              <Route path="/" element={<IndexPage />}> </Route>
              <Route path="/about" element={<AboutPage />}> </Route> 
              <Route path="/users">
                 <Route path="/users" element={<UsersPage />}> </Route>
                 <Route path=":userName" element={<UserPage />}> </Route>
              </Route> 
           </Route> 
         </Routes>
         
    )
    
}

export default App;