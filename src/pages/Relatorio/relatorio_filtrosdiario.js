import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
//import  api  from '../../components/Services/api';
import { Link } from 'react-router-dom';
import './relatorio_filtroddiario.css';

const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Relatorio_filtrosdiario() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
  }

  return (
  <>

  <div className="container grid-areas">

  <div className="header">
    
     <DarkMode />
     <Navbar />

  </div>
  
  <div className="body">

  <form className="udmedida_form" onSubmit = { handleSubmit(onSubmit) } >

<div className="udmedida_titulo">
  <h1>Filtrar por dia</h1>
</div>

<div className="udmedida_linha">

  <div className="udmedida_campo">

    <label htmlFor="nomeUnidadeMedida">Data de Início</label>
    <input 
           type="date" 
           id="nomeUnidadeMedida" 
           name="nomeUnidadeMedida"
           {...register("nomeUnidadeMedida", {
            required: 'Preenchimento Obrigatório',
            minLength: {
              value: 2,
              message: 'No minimo dois caracteres' 
            }
          })}
     />
  
  <div className="erro">
  <ErrorMessage errors={errors} name="nomeUnidadeMedida">
  {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
  </ErrorMessage>
  </div>

  </div>

</div>

<div className="udmedida_linha">

  <div className="udmedida_campo">

    <label htmlFor="siglaUnidadeMedida">Data Final</label>
    <input 
           type="date" 
           id="siglaUnidadeMedida" 
           name="siglaUnidadeMedida"
           {...register("siglaUnidadeMedida", {
            required: 'Preenchimento Obrigatório',
            minLength: {
              value: 2,
              message: 'No minimo dois caracteres' 
            }
          })}
     />

  <div className="erro">
  <ErrorMessage errors={errors} name="siglaUnidadeMedida">
  {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
  </ErrorMessage>
  </div>

  </div>

</div>
    <Link to='./relatorio-fatsumarizado' >
    <button type="" to="./relatorio-fatsumarizado">Avançar</button>
    </Link>
</form>

         
    <Link to='./relatorio-filtrod' className='voltar-links' alt="olá">
          Voltar
    </Link>

  </div>

  <div className="footer">
    Projeto Integrador 2021 - 2022
  </div>
  </div>

  </>
  );
}