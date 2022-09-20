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
  <a id='a' href='/cadastro-categoria'><button id="button-menu">Categoria</button></a>
  <a id='a' href='/cadastro-subcategoria'><button id="button-menu">Subcategoria</button></a>
  <a id='a' href='/cadastro-unidadedemedida'><button id="button-menu">Unidade Medida</button></a>
  <a id='a' href='/cadastro-produto'><button id="button-menu">Produto</button></a>
  <a id='a' href='/cadastro-pessoafisica'><button id="button-menu">Pessoa Física</button></a>
  <a id='a' href='/cadastro-pessoajuridica'><button id="button-menu">Pessoa Jurídica</button></a>
  <a id='a' href='/cadastro-tipopagamento'><button id="button-menu">Tipo Pagamento</button></a>
  <a id='a' href='/cadastro-usuario'><button id="button-menu">Usuário</button></a>








  </div>
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}