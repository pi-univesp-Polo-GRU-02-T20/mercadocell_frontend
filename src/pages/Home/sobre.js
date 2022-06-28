import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';

export default function Sobre() {
 
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">

    <DarkMode />
    <Navbar />

  </div>
  
  <div className="body">
  
  <div className="fundo_pagina">
      
  <div className="sobre">
     <h1>Sobre o site:</h1> 
     <br/>
     <p>Este site foi desenvolvido como trabalho das disciplinas Projeto Integrador I e Projeto Integrador II da UNIVESP.</p> 
     <br/>
     <p>Equipe: Felipe Souza, Jucelino Silva, Leandro Bellato, Márcio De Sa, Michel de Souza e Renan Vieira.</p>
  </div>
  
  <div className="btnSobre">
    <Link to='./' className='home-links' alt="olá">
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