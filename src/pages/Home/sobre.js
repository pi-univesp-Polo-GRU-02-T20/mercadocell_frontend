import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import '../Cadastro/cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Sobre() {
 
  return (
  <>
  
  <div className="container grid-areas">

  <div className="header">

    <DarkMode />
    <Navbar />

  </div>
  
  <div className="bodya">

  <div className="form-fundo">
   
        <div className="form-header">
            <div className="title">
                <h1>Sobre o site:</h1>
            </div>
        </div>

     <br/>
     <p>Este site foi desenvolvido como trabalho das disciplinas Projeto Integrador da UNIVESP.</p> 
     <br/>
     <p>Equipe: Felipe Souza, Jucelino Silva, Leandro Bellato, Marcelo Wecchi, Márcio De Sa, Michel de Souza, Renan Vieira e William de Paula.</p>
  </div>
  
  <div className="btnSobre">
    <Link to='/' className='home-links' alt="olá">
        Voltar
    </Link>
  </div>

  </div>


  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>  
  </>
  );
}