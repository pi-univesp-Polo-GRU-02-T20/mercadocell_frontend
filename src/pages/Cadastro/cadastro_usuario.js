import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_usuario.css';
import  api  from '../../components/Services/api';

export default function Cadastro_usuario() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/usuario", data);
  }

  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">

    <form className="usuario_form" onSubmit = { handleSubmit(onSubmit) } >

      <div className="usuario_titulo">
        <h1>Cadastrar Usuário</h1>
      </div>

      <div className="usuario_linha">

        <div className="usuario_campo2">

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
        <div className="usuario_campo2">

          <label htmlFor="codPessoa"> Código de Pessoa </label>
          <input 
                 type="text" 
                 id="codPessoa" 
                 name="codPessoa"
                 {...register("codPessoa", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="codPessoa">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>

      </div>

      <div className="usuario_linha">

        <div className="usuario_campo2">

          <label htmlFor="login"> Login </label>
          <input 
                 type="text" 
                 id="login" 
                 name="login"
                 {...register("login", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="login">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>

        <div className="usuario_campo2">

        <label htmlFor="senha"> Senha </label>
          <input 
                 type="text" 
                 id="senha" 
                 name="senha"
                 {...register("senha", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="senha">
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