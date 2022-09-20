import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';

import './menu.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function MenuOperacao() { 
  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="bodya">

  <div className="menu-fundo">
  <a id='a' href='/movimentacao-compra'><button id="button-menu">Compra</button></a>
  <a id='a' href='/movimentacao-venda'><button id="button-menu">Venda</button></a>
  <a id='a' href='/movimentacao-pagamento'><button id="button-menu">Pagamento</button></a>
  </div>
 
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}