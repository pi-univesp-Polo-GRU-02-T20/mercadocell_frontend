import React, {useContext} from 'react';
import StoreContext from '../../components/Store/Context';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';

export default function Mapa() {
  
  const { setToken } = useContext(StoreContext);
 
  return (
  <>
  
  <div class="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="body">
  
  <div className="fundo_pagina">
  
  <div className="bemVindo_titulo">
      <h1>Mapa do site</h1>
  </div>

  <div className="btn">
    <Link to='/cadastro-categoria'> Cadastro de Categoria </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-subcategoria'> Cadastro de Subcategoria </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-unidadedemedida'> Cadastro de Unidade de Medida </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-produto'> Cadastro de Produto </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-pessoafisica'> Cadastro de Pessoa Física </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-pessoajuridica'> Cadastro de Pessoa Jurídica </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-tipopagamento'> Cadastro de Tipo de Pagamento </Link>
  </div>

  <div className="btn">
    <Link to='/cadastro-usuario'> Cadastro de Usuário </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-categoria'> Consulta de Categoria </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-subcategoria'> Consulta de Subcategoria </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-unidadedemedida'> Consulta de Unidade de Medida </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-produto'> Consulta de Produto </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-pessoafisica'> Consulta de Pessoa Física </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-pessoajuridica'> Consulta de Pessoa Jurídica </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-tipopagamento'> Consulta de Tipo de Pagamento </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-usuario'> Consulta de Usuário </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-operacao'> Consulta de Operação </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-pagamentocompra'> Consulta de Pagamento-Compra </Link>
  </div>

  <div className="btn">
    <Link to='/consulta-pagamentovenda'> Consulta de Pagamento-Venda </Link>
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