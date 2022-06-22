import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';

export default function Recursos() {
 
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">

    <DarkMode />
    <Navbar />

  </div>
  
  <div className="body">
  
  <div className="fundo_pagina">
      
  <div className="recursos">
     <h1>Recursos de acessibilidade:</h1> 
     <br/>
     <p align="justify">"Acessibilidade Digital é a eliminação de barreiras na Web. O conceito pressupõe que os sites e portais sejam projetados de modo que todas as pessoas possam perceber, entender, navegar e interagir de maneira efetiva com as páginas."</p>
     <br/>
     <p>Fonte: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital">https://www.gov.br/governodigital/pt-br/acessibilidade-digital</a></p>
     <br/>
     
     <h2>Alto contraste</h2>
     <p>- Use o botão "ALTO CONTRASTE" na barra superior para realçar o contraste entre os elementos da página</p> 
     <br/>
     <h2>Aumento de fonte</h2>
     <p>- Use o botão "+/-" na barra superior para aumentar a fonte do texto da página</p>
     
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