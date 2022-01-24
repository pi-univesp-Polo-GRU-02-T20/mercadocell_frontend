import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './movimentacao_compra.css';
import  api  from '../../components/Services/api';
import LISTAR_PAGAMENTO from '../../components/Listas/listar_pagamento';
import LISTAR_PESSOA from '../../components/Listas/listar_pessoa';
import moment from 'moment';

export default function Movimentacao_compra() {

  var codigo = 12;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    data.codOperacao = 0; 
    data.tipoOperacao = "C";
    data.pago = false;
    data.dataOperacao = moment(data.dataOperacao).format("yyyy-MM-DD HH:mm:ss");
    
    console.log(data);
    api.post("/operacao", data);
    alert("Cadastro Realizado");
    window.location.reload()
  }

  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">

    <form className="compra_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="compra_titulo">
    <h1>Operação de Compra</h1>
    </div>






    <div className="compra_linha">  
    <div className="compra_campo2"> 

    <label htmlFor="pessoa.codPessoa">Código de Pessoa</label>

    <select 
           type="text" 
           id="pessoa.codPessoa" 
           name="pessoa.codPessoa"
           {...register("pessoa.codPessoa")}
     >


    
    
      <option hidden disabled selected value> Selecione um código </option>
      <LISTAR_PESSOA />

    </select>
    
    

    </div>
    </div>






    

    <label htmlFor="tipoPagamento.codTipoPagamento">Tipo de pagamento</label>
    <select 
           type="text" 
           id="tipoPagamento.codTipoPagamento" 
           name="tipoPagamento.codTipoPagamento"
           {...register("tipoPagamento.codTipoPagamento")}
     >

    <option hidden disabled selected value> Selecione uma opção </option>
    <LISTAR_PAGAMENTO />

    </select>

    <LISTAR_PAGAMENTO />
                       
  <ErrorMessage errors={errors} name="tipoPagamento.codTipoPagamento">
  {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
  </ErrorMessage> 

    codigo
    


    













    

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
  </>
  );
}