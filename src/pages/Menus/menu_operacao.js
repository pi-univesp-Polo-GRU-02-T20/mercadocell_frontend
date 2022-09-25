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
  <Link id='a' to='/movimentacao-compra'><button id="button-menu">Compra</button></Link>
  <Link id='a' to='/movimentacao-venda'><button id="button-menu">Venda</button></Link>
  <Link id='a' to='/movimentacao-pagamento'><button id="button-menu">Pagamento</button></Link>
  </div>
 
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}