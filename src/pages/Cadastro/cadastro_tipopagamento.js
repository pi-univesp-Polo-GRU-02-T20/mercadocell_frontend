import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_tipopagamento.css';
import  api  from '../../components/Services/api';

export default function Cadastro_tipopagamento() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("http://localhost:8080/tipoPagamento", data);
  }

  return (
  <>
  
  <Navbar />
  
  <div className="fundo_pagina">

    <form className = "tipopagamento_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="tipopagamento_titulo">
      <h1>Cadastrar Tipo de Pagamento</h1>
    </div>

        <div className="tipopagamento_linha">
        <div className="tipopagamento_campo">

          <label htmlFor="tipopagamento_nome"> Tipo de Pagamento </label>
          <input 
                 type="text" 
                 id="nomeCategoria" 
                 name="nomeCategoria"
                 {...register("nomeCategoria", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="nomeCategoria">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>
        </div>

        <button type="submit">Cadastrar</button>

         
    </form>

  </div>
  </>
  );
}