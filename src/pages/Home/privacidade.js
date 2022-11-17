import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import '../Cadastro/cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Privacidade() {
 
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
                <h1>Politicas de privacidade</h1>
            </div>
        </div>

        
        


      <p>Coloca o texto aqui</p>




       
    
</div>



 </div> 
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>  
  </>
  );
}