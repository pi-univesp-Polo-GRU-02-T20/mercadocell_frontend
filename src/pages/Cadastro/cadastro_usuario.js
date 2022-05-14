import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_usuario.css';
import api  from '../../components/Services/api';
import DarkMode  from '../../components/DarkMode';
import LISTAR_CODPESSOA from '../../components/Listas/listar_codpessoa';

export default function Cadastro_usuario() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/usuario", data);
    alert("Cadastro Realizado");
    window.location.reload()
  }

  return (
  <>

  <div className="container grid-areas">

  <div className="header">

   <DarkMode />
   <Navbar />

  </div>

<div className="body">

  <div className="fundo_pagina">

    <form className="usuario_form" onSubmit = { handleSubmit(onSubmit) } >

      <div className="usuario_titulo">
        <h1>Cadastrar Usuário</h1>
      </div>

      <div className="usuario_linha">

        <div className="usuario_campo2">

          <label htmlFor="nomePessoa"> Nome de usuário </label>
          <input 
                 type="text" 
                 id="nomePessoa" 
                 name="nomePessoa"
                 {...register("nomePessoa", {
                  required: 'Preenchimento Obrigatório'
                })}
           />
        
        <ErrorMessage errors={errors} name="nomePessoa">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>
        <div className="usuario_campo">

          <label htmlFor="codPessoa"> Código de Pessoa </label>
          <select 
                 type="text" 
                 id="categoria.codCategoria" 
                 name="categoria.codCategoria"
                 {...register("categoria.codCategoria", {
                  required: 'Preenchimento Obrigatório',
                })}
           >
             <option hidden disabled selected value> Selecione um código </option>
             <LISTAR_CODPESSOA />
           </select>
        
        </div>

      </div>

      <div className="usuario_linha">

        <div className="usuario_campo3">

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
        </div>

        <div className="usuario_linha">

        <div className="usuario_campo2">

        <label htmlFor="senha"> Senha </label>
          <input 
                 type="password" 
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

        <div className="usuario_campo2">

        <label htmlFor="senha"> Confirmar Senha </label>
          <input 
                 type="password" 
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
    </div>
    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>

  </div>
  </>
  );
}