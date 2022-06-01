import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './movimentacao_pagamento.css';
import  api  from '../../components/Services/api';
import ListarOperacao from '../../components/Listas/listar_operacao';
import moment from 'moment';
import  DarkMode  from '../../components/DarkMode';

export default function Movimentacao_pagamento() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    data.dataPagamento = moment(data.dataPagamento).format("yyyy-MM-DD HH:mm:ss");
    data.dataVencimento = moment(data.dataVencimento).format("yyyy-MM-DD HH:mm:ss");
    api.post("/pagamentoOperacao", data);
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
  <form className="pagamento_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="pagamento_titulo">
    <h1>Incluir Pagamento</h1>
    </div>

    <div className="pagamento_linha">

      <div className="pagamento_campo">

          <label htmlFor="operacao.codOperacao">Operação</label>
          <select 
                 type="text" 
                 id="operacao.codOperacao" 
                 name="operacao.codOperacao"
                 {...register("operacao.codOperacao", {
                  required: 'Preenchimento Obrigatório'
                })}
          >


           <ListarOperacao/>

          
          </select>
        
          <ErrorMessage errors={errors} name="codOperacao">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
          </ErrorMessage>

      </div>

    </div>

    <div className="pagamento_linha">

      <div className="pagamento_campo">

          <label htmlFor="dataPagamento">Data de Pagamento</label>
          <input 
                 type="datetime-local" 
                 id="dataPagamento" 
                 name="dataPagamento"
                 step="1"
                 {...register("dataPagamento", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres'
                  }
                })}
          />
                             
        <ErrorMessage errors={errors} name="dataPagamento">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

      </div>

      <div className="pagamento_campo">

<label htmlFor="dataVencimento">Data de Vencimento</label>
<input
       type="datetime-local" 
       id="dataVencimento" 
       name="dataVencimento"
       step="1"
       {...register("dataVencimento", {
        required: 'Preenchimento Obrigatório'})}
/>


<ErrorMessage errors={errors} name="dataVencimento">
{({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
</ErrorMessage>

</div>

    </div>


<div className="pagamento_linha3">

      <div className="pagamento_campo">

          <label htmlFor="valorPagamento">Valor do Pagamento (R$)</label>
          <input 
                 type="number" 
                 id="valorPagamento" 
                 name="valorPagamento"
                 {...register("valorPagamento", {
                  required: 'Preenchimento Obrigatório'
                })}
           />
                             
        <ErrorMessage errors={errors} name="valorPagamento">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

      </div>

    </div>

        <button type="submit">Cadastrar</button>
         
    </form>
    </div>

<div className="footer">
  <p>Projeto Integrador 2021 - 2022</p>
</div>
</div>
</>
);
}