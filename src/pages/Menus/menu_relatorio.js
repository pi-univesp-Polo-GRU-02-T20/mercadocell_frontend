import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';

import './menu.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function MenuRelatorio() { 
  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="bodya">

  <div className="menu-fundo">
  <Link id='a' to='/relatorio-fatdetalhado-dia'><button id="button-menu">Fat. Detalhado</button></Link>
  <Link id='a' to='/relatorio-fatsumarizado-mes'><button id="button-menu">Fat. Sumarizado</button></Link>
  </div>
 
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}