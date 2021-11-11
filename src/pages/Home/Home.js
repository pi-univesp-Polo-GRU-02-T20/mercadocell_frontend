import React, {useContext} from 'react';
import StoreContext from '../../components/Store/Context';
import '../../App.css';
import Navbar from '../../components/Menu/Navbar';

export default function Home() {
  
  const { setToken } = useContext(StoreContext);
 
  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">
  <div>
      <h1>Bem-vindo</h1>
  </div>
  </div>
  </>
  );
}