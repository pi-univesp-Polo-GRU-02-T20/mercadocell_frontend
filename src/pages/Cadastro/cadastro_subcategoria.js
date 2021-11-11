import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_subcategoria.css';
import  api  from '../../components/Services/api';
import Listar_categoria from '../../components/Listas/listar_categoria';

export default function Cadastro_subcategoria() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/subCategoria", data);
  }

  return (
  <>
  
  <Navbar />
  
  <div className="fundo_pagina">

    <form className = "subCategoria_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="subCategoria_titulo">
      <h1>Cadastrar Subcategoria</h1>
    </div>

        <div className="subCategoria_linha">
        <div className="subCategoria_campo">

          <label htmlFor="categoria.nomeCategoria"> Categoria </label>
          <select 
                 type="text" 
                 id="categoria.codCategoria" 
                 name="categoria.codCategoria"
                 {...register("categoria.codCategoria", {
                  required: 'Preenchimento Obrigatório',
                })}
           >
             <option hidden disabled selected value> Selecione uma categoria </option>
             <Listar_categoria />
           </select>
        
           <ErrorMessage errors={errors} name="categoria.codCategoria">
             {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
           </ErrorMessage>

        </div>
        </div>

        <div className="subCategoria_linha">
        <div className="subCategoria_campo">

          <label htmlFor="nomeSubCategoria"> Nome da Subcategoria </label>
          <input 
                 type="text" 
                 id="nomeSubCategoria" 
                 name="nomeSubCategoria"
                 {...register("nomeSubCategoria", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
          />
        
           <ErrorMessage errors={errors} name="nomeSubCategoria">
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