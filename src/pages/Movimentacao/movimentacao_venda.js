import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './movimentacao_compra.css';
import  api  from '../../components/Services/api';
import Listar_pagamento from '../../components/Listas/listar_unidadedemedida';

export default function Movimentacao_compra() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    data.tipoOperacao = "Venda";
    console.log(data);
    api.post("/operacao", data);
  }

  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">

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
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
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
             <option value="Pedido" key="pedido">Pedido</option>
             <option value="Orçamento" key="orcamento">Orçamento</option>
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
       {...register("dataOperacao", {
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












    <div className="compra_linha">  

    <div className="compra_campo2"> 

    <label htmlFor="codTipoPagamento">Tipo de pagamento</label>
    <select 
           type="text" 
           id="codTipoPagamento" 
           name="codTipoPagamento"
           {...register("codTipoPagamento")}
     >
 

    <option value="Crédito" key="credito"> Crédito </option>
    <Listar_pagamento />





    </select>
                       
  <ErrorMessage errors={errors} name="codTipoPagamento">
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

<div className="compra_campo2">

<label htmlFor="nomeSubCategoria">Valor Total (R$)</label>
<input 
 type="number"
 min="1" 
 step="any" 
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