import React, {useContext} from 'react';
import StoreContext from '../../components/Store/Context';
import '../../App.css';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';


export default function Sobre() {
  
  const { setToken } = useContext(StoreContext);
 
  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">
      <h2>Sobre o site: <br/><br/> Este site foi desenvolvido como trabalho da disciplina Projeto Integrador I da UNIVESP. <br/> <br/>Equipe: Felipe Souza, Jucelino Silva, Leandro Bellato, Márcio De Sa e Renan Vieira.  </h2>
      
  </div>
  </>
  );
}