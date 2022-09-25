import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';

import './menu.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function MenuConsulta() { 
  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="bodya">

  <div className="menu-fundo">
  <Link id='a' to='/consulta-categoria'><button id="button-menu">Categoria</button></Link>
  <Link id='a' to='/consulta-subcategoria'><button id="button-menu">Subcategoria</button></Link>
  <Link id='a' to='/consulta-unidadedemedida'><button id="button-menu">Unidade Medida</button></Link>
  <Link id='a' to='/consulta-produto'><button id="button-menu">Produto</button></Link>
  <Link id='a' to='/consulta-pessoafisica'><button id="button-menu">Pessoa Física</button></Link>
  <Link id='a' to='/consulta-pessoajuridica'><button id="button-menu">Pessoa Jurídica</button></Link>
  <Link id='a' to='/consulta-tipopagamento'><button id="button-menu">Tipo Pagamento</button></Link>
  <Link id='a' to='/consulta-usuario'><button id="button-menu">Usuário</button></Link>
  <Link id='a' to='/consulta-operacao'><button id="button-menu">Operação Compra e Venda</button></Link>
  <Link id='a' to='/consulta-pagamentocompra'><button id="button-menu">Pagamento Compra</button></Link>
  <Link id='a' to='/consulta-pagamentovenda'><button id="button-menu">Pagamento Venda</button></Link>


  </div>
 
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}