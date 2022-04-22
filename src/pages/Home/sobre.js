import React, {useContext} from 'react';
import StoreContext from '../../components/Store/Context';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';

export default function Sobre() {
  
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
     <h1>Sobre o site:</h1> 
     <br/>
     <p>Este site foi desenvolvido como trabalho da disciplina Projeto Integrador I da UNIVESP</p> 
     <br/>
     <p>Equipe: Felipe Souza, Jucelino Silva, Leandro Bellato, Márcio De Sa e Renan Vieira.</p>
  </div>
  
  <div className="btnSobre">
    <Link to='./' className='home-links'>
        Voltar
    </Link>
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