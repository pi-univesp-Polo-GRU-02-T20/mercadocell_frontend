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
  <a id='a' href='/consulta-categoria'><button id="button-menu">Categoria</button></a>
  <a id='a' href='/consulta-subcategoria'><button id="button-menu">Subcategoria</button></a>
  <a id='a' href='/consulta-unidadedemedida'><button id="button-menu">Unidade Medida</button></a>
  <a id='a' href='/consulta-produto'><button id="button-menu">Produto</button></a>
  <a id='a' href='/consulta-pessoafisica'><button id="button-menu">Pessoa Física</button></a>
  <a id='a' href='/consulta-pessoajuridica'><button id="button-menu">Pessoa Jurídica</button></a>
  <a id='a' href='/consulta-tipopagamento'><button id="button-menu">Tipo Pagamento</button></a>
  <a id='a' href='/consulta-usuario'><button id="button-menu">Usuário</button></a>
  <a id='a' href='/consulta-operacao'><button id="button-menu">Operação Compra e Venda</button></a>
  <a id='a' href='/consulta-pagamentocompra'><button id="button-menu">Pagamento Compra</button></a>
  <a id='a' href='/consulta-pagamentovenda'><button id="button-menu">Pagamento Venda</button></a>


  </div>
 
  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}