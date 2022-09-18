import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import '../Cadastro/cadastro.css';
import  api  from '../../components/Services/api';
import ListarPagamento from '../../components/Listas/listar_pagamento';
import ListarPessoa from '../../components/Listas/listar_pessoa';
import moment from 'moment';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Movimentacao_compra() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    data.codOperacao = 0; 
    data.tipoOperacao = "V";
    data.pago = false;
    data.dataOperacao = moment(data.dataOperacao).format("yyyy-MM-DD HH:mm:ss");
    
    console.log(data);
    api.post("/operacao", data);
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
      <form className="compra_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="compra_titulo">
    <h1>Operação de Venda</h1>
    </div>

    <div className="compra_linha">

      <div className="compra_campo">

          <label htmlFor="codNotaFiscal">Código da Nota Fiscal</label>
          <input 
                 type="text" 
                 id="codNotaFiscal" 
                 name="codNotaFiscal"
                 {...register("codNotaFiscal", {
                  required: 'Preenchimento Obrigatório'
                })}
           />
        
          <ErrorMessage errors={errors} name="codNotaFiscal">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
          </ErrorMessage>

      </div>

    </div>

    <div className="compra_linha">

      <div className="compra_campo">

          <label htmlFor="tipoStatusOperacao">Status da Operação</label>
          <select 
                 type="text" 
                 id="tipoStatusOperacao" 
                 name="tipoStatusOperacao"
                 {...register("tipoStatusOperacao", {
                  required: 'Preenchimento Obrigatório',
                })}
           >
             <option selected disabled hidden> Selecione um status </option>
             <option value="P" key="pedido">Pedido</option>
             <option value="O" key="orcamento">Orçamento</option>
          </select>
                             
        <ErrorMessage errors={errors} name="tipoStatusOperacao">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>

      </div>

      <div className="compra_campo2">

<label htmlFor="dataOperacao">Data da Operação</label>
<input 
       type="datetime-local" 
       id="dataOperacao" 
       name="dataOperacao"
       step="1"
       {...register("dataOperacao", {
        required: 'Preenchimento Obrigatório'})}
 />

<ErrorMessage errors={errors} name="nomeSubCategoria">
{({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
</ErrorMessage>

</div>



    <div className="compra_campo"> 

    <label htmlFor="pessoa.codPessoa">Código de Pessoa</label>

    <select 
           type="text" 
           id="pessoa.codPessoa" 
           name="pessoa.codPessoa"
           {...register("pessoa.codPessoa")}
     >
      <option selected disabled hidden> Selecione um código </option>
      <ListarPessoa />

    </select>

    </div>
    </div>






    <div className="compra_linha">  

    <div className="compra_campo2"> 

    <label htmlFor="tipoPagamento.codTipoPagamento">Tipo de pagamento</label>
    <select 
           type="text" 
           id="tipoPagamento.codTipoPagamento" 
           name="tipoPagamento.codTipoPagamento"
           {...register("tipoPagamento.codTipoPagamento")}
     >

    <option selected disabled hidden> Selecione uma opção </option>
    <ListarPagamento />

    </select>
                       
  <ErrorMessage errors={errors} name="tipoPagamento.codTipoPagamento">
  {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
  </ErrorMessage> 
    
    </div>

    </div>













    

    <div className="compra_linha">

<div className="compra_campo">

    <label htmlFor="quantidadeParcela">Quantidade de parcelas</label>
    <select 
           type="text" 
           id="quantidadeParcela" 
           name="quantidadeParcela"
           {...register("quantidadeParcela", {
            required: 'Preenchimento Obrigatório',
          })}
     >
        <option value="1" key="1">1</option>
        <option value="2" key="2">2</option>
        <option value="3" key="3">3</option>
        <option value="4" key="4">4</option>
        <option value="5" key="5">5</option>
        <option value="6" key="6">6</option>
        <option value="7" key="7">7</option>
        <option value="8" key="8">8</option>
        <option value="9" key="9">9</option>
        <option value="10" key="10">10</option>
        <option value="11" key="11">11</option>
        <option value="12" key="12">12</option>
    </select>
                       
  <ErrorMessage errors={errors} name="quantidadeParcela">
  {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
  </ErrorMessage>

</div>

<div className="compra_campo3">

<label htmlFor="nomeSubCategoria">Valor Total (R$)</label>
<input 
 type="number"
 min="1" 
 step="any" 
 id="valorTotal" 
 name="valorTotal"
 {...register("valorTotal", {
  required: 'Preenchimento Obrigatório',
})}
/>

<ErrorMessage errors={errors} name="valorTotal">
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