import React, {useContext} from 'react';
import StoreContext from '../../components/Store/Context';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';

export default function Mapa() {
  
  const { setToken } = useContext(StoreContext);
 
  return (
  <>
  
  <div class="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="body">
  
  <div className="fundo_pagina">
  
  <div className="bemVindo_titulo">
      <h1>Mapa do site</h1>
  </div>

  <div className="btn">
    <Link to='/cadastro-categoria'> Cadastro de Categoria </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-subcategoria'> Cadastro de Subcategoria </Link>
  </div>

  </div>
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}