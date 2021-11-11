import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_pessoajuridica.css';
import  api  from '../../components/Services/api';

export default function Cadastro_pessoajuridica() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/pessoaJuridica", data);
  }

  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">

    <form className="pessoajuridica_form" onSubmit = { handleSubmit(onSubmit) } >

      <div className="pessoajuridica_titulo">
        <h1>Cadastrar Pessoa Jurídica</h1>
      </div>

      <div className="pessoajuridica_linha">

        <div className="pessoajuridica_campo">

          <label htmlFor="nomePessoa"> Nome </label>
          <input 
                 type="text" 
                 id="nomePessoa" 
                 name="nomePessoa"
                 {...register("nomePessoa", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="nomePessoa">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>

      </div>

      <div className="pessoajuridica_linha">

        <div className="pessoajuridica_campo">

          <label htmlFor="nomeRazaoSocial"> Razão Social </label>
          <input 
                 type="text" 
                 id="nomeRazaoSocial" 
                 name="nomeRazaoSocial"
                 {...register("nomeRazaoSocial", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="nomeRazaoSocial">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>
        </div>

        <div className="pessoajuridica_linha3">

        <div className="pessoajuridica_campo">

        <label htmlFor="codCNPJ"> CNPJ </label>
          <input 
                 type="number" 
                 id="codCNPJ" 
                 name="codCNPJ"
                 {...register("codCNPJ", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="codCNPJ">
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