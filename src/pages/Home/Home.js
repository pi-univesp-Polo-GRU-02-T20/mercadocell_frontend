import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';



export default function Home() {





 
  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="body">
  
  <div className="fundo_pagina">

 
  
  <div className="bemVindo_titulo">
      <h1>Bem-vindo</h1>
  </div>

  <div className="btnSobre">
    <Link to='./sobre' className='home-links'>
        Sobre
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