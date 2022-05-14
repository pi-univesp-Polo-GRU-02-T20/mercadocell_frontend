import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import  DarkMode  from '../../components/DarkMode';
import './Home.css';

export default function Mapa() {
 
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="body">

<div className="fundo-mapas">

<div className="mapa_titulo">
    <h1>Mapa do site</h1>
</div>

<div className="linha-mapas">

<div className="mapa-cadastro">

    <div className="mapa_subtitulo">
      <h1>Cadastro</h1>
    </div>

    <Link to='/cadastro-categoria'> Cadastro de Categoria </Link>
  
    <Link to='/cadastro-subcategoria'> Cadastro de Subcategoria </Link>
  
    <Link to='/cadastro-unidadedemedida'> Cadastro de Unidade de Medida </Link>
  
    <Link to='/cadastro-produto'> Cadastro de Produto </Link>

    <Link to='/cadastro-pessoafisica'> Cadastro de Pessoa Física </Link>

    <Link to='/cadastro-pessoajuridica'> Cadastro de Pessoa Jurídica </Link>
 
    <Link to='/cadastro-tipopagamento'> Cadastro de Tipo de Pagamento </Link>

    <Link to='/cadastro-usuario'> Cadastro de Usuário </Link>

</div>

<div className="mapa-consulta">

    <div className="mapa_subtitulo">
      <h1>Consulta</h1>
    </div>
  
    <Link to='/consulta-categoria'> Consulta de Categoria </Link>

    <Link to='/consulta-subcategoria'> Consulta de Subcategoria </Link>

    <Link to='/consulta-unidadedemedida'> Consulta de Unidade de Medida </Link>

    <Link to='/consulta-produto'> Consulta de Produto </Link>

    <Link to='/consulta-pessoafisica'> Consulta de Pessoa Física </Link>

    <Link to='/consulta-pessoajuridica'> Consulta de Pessoa Jurídica </Link>

    <Link to='/consulta-tipopagamento'> Consulta de Tipo de Pagamento </Link>

    <Link to='/consulta-usuario'> Consulta de Usuário </Link>

    <Link to='/consulta-operacao'> Consulta de Operação </Link>

    <Link to='/consulta-pagamentocompra'> Consulta de Pagamento-Compra </Link>

    <Link to='/consulta-pagamentovenda'> Consulta de Pagamento-Venda </Link>

</div>

<div className="mapa-operacao">

    <div className="mapa_subtitulo">
      <h1>Operação</h1>
    </div>

    <Link to='/consulta-pessoafisica'> Operação de compra </Link>

    <Link to='/consulta-pessoajuridica'> Operação de venda </Link>

    <Link to='/consulta-tipopagamento'> Pagamento </Link>

</div>

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