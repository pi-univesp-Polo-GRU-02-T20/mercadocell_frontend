import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import './Home.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Home() { 
  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="body">

  <div className="menu-fundo">
  
  <div className="bemVindo_titulo">
      <h1>Bem-vindo</h1>
  </div>

  <Link id='a' to="/sobre"><button id="button-menu">Sobre</button></Link>

  </div>

  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}