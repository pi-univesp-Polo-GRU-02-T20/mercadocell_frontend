import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_categoria.css';
import  api  from '../../components/Services/api';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_categoria() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/categoria", data);
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

    <form className = "categoria_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="categoria_titulo">
      <h1>Cadastrar Categoria</h1>
    </div>

        <div className="categoria_linha">
        <div className="categoria_campo">

          <label htmlFor="nomeCategoria"> Nome da categoria </label>
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
        
        <div className="erro">
        <ErrorMessage  errors={errors} name="nomeCategoria">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>
        </div>

        </div>
        </div>

        <button type="submit">Cadastrar</button>

         
    </form>

  </div>

  <div className="footer">
    Projeto Integrador 2021 - 2022
  </div>
  </div>

  </>
  );
}