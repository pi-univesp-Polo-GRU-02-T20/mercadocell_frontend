import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';

import './menu.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function MenuCadastro() { 
  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="bodya">

  <div className="menu-fundo">
    
  <Link id='a' to='/cadastro-categoria'><button id="button-menu">Categoria</button></Link>
  <Link id='a' to='/cadastro-subcategoria'><button id="button-menu">Subcategoria</button></Link>
  <Link id='a' to='/cadastro-unidadedemedida'><button id="button-menu">Unidade Medida</button></Link>
  <Link id='a' to='/cadastro-produto'><button id="button-menu">Produto</button></Link>
  <Link id='a' to='/cadastro-pessoafisica'><button id="button-menu">Pessoa Física</button></Link>
  <Link id='a' to='/cadastro-pessoajuridica'><button id="button-menu">Pessoa Jurídica</button></Link>
  <Link id='a' to='/cadastro-tipopagamento'><button id="button-menu">Tipo Pagamento</button></Link>
  <Link id='a' to='/cadastro-usuario'><button id="button-menu">Usuário</button></Link>

  </div>
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}