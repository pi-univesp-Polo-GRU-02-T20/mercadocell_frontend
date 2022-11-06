import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Private} from './Private';

import { Login } from '../pages/Login/Login';

import { Home } from '../pages/Home/Home';


export const RoutesApp = () => {

return(

<Router>
    <Routes>
          
        <Route path="/" element={ <Login /> } />

        <Route path="/home" element={<Private/>}>
          <Route path="/home" element={<Home />} /> 
        </Route>

    </Routes>
</Router>
  );

};