import React from "react";
import Navbar from '../../components/Menu/Navbar';
import  DarkMode  from '../../components/DarkMode';
import { Link } from 'react-router-dom';
import './relatorio.css';

export default function Relatorio_filtrod() {

  
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">
  
    <DarkMode />
    <Navbar />
  
  </div>
    
  <div className="body">

  <div className="fundo-filtro">
    
    <div className="filtro_titulo">
          <h1>Filtrar Relatórios</h1>
    </div>

<div className="linha-filtro">
<div className="filtro-cadastro">

<div className="btnRelatorio1">
<Link to='relatorio-filtroddiario' className='home-links' alt="olá">
Diário
</Link>
</div>
</div>




<div className="filtro-consulta">

<div className="btnRelatorio2">
<Link to='relatorio-filtrodmes' className='home-links' alt="olá">
Mensal
</Link>
</div>

</div>


<div className="filtro-operacao">

<div className="btnRelatorio3">
<Link to='relatorio-filtrodanual' className='home-links' alt="olá">
Anual
</Link>
</div>

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