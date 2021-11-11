import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_pessoafisica.css';
import  api  from '../../components/Services/api';

export default function Cadastro_pessoafisica() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/pessoaFisica", data);
  }

  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">

    <form className="pessoafisica_form" onSubmit = { handleSubmit(onSubmit) } >

      <div className="pessoafisica_titulo">
        <h1>Cadastrar Pessoa Física</h1>
      </div>

      <div className="pessoafisica_linha">

        <div className="pessoafisica_campo">

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

      

      <div className="pessoafisica_linha">

        <div className="pessoafisica_campo2">

          <label htmlFor="dataNascimento"> Data de Nascimento </label>
          <input 
                 type="date" 
                 id="dataNascimento" 
                 name="dataNascimento"
                 {...register("dataNascimento", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="dataNascimento">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>

        <div className="pessoafisica_campo2">

        <label htmlFor="estadoNaturalidade"> Naturalidade </label>
          <input 
                 type="text" 
                 id="estadoNaturalidade" 
                 name="estadoNaturalidade"
                 {...register("estadoNaturalidade", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
           />
        
        <ErrorMessage errors={errors} name="estadoNaturalidade">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

        </div>
        </div>

        <div className="pessoafisica_linha">

        <div className="pessoafisica_campo">

          <label htmlFor="tipoSexo">  Sexo: </label>
          
          <div className="radio">
          
          <input 
                 type="radio" 
                 id="tipoSexo" 
                 name="tipoSexo"
                 value="M"
                 {...register("tipoSexo")}
           />
           <label htmlFor="tipoSexo"> Masculino </label>

        </div>
        
        <div className="radio">
        
          <input 
                 type="radio" 
                 id="tipoSexo" 
                 name="tipoSexo"
                 value="F"
                 {...register("tipoSexo")}
           />
           <label htmlFor="tipoSexo"> Feminino </label>
        </div>

        </div>

        </div>

          <button type="submit">Cadastrar</button>

         
    </form>

  </div>
  </>
  );
}