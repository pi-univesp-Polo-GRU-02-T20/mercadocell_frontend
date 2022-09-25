import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import '../Cadastro/cadastro.css';
import  api  from '../../components/Services/api';
import ListarOperacao from '../../components/Listas/listar_operacao';
import moment from 'moment';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));


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

<div className="bodya">
<div className="form-fundo">
  <form onSubmit = { handleSubmit(onSubmit) } >

  <div className="form-header">
      <div className="title">
              <h1>Incluir Pagamento</h1>
          </div>
    </div>

    <div className="input-group-column">

    <div className="input-group-row">

                  <div className="input-box">
                      <label htmlFor="nomeProduto">Operação</label>
                      <select type="text" id="doublebox" 
                      name="operacao.codOperacao"
                      {...register("operacao.codOperacao", {
                        required: 'Preenchimento Obrigatório'
                      })}           
          
          >
           <ListarOperacao/>
          
          </select>                 

      </div>

</div>

      <div className="input-group-row">

                  <div className="input-box">
                       <label htmlFor="dataPagamento">Data de Pagamento</label>
                       <input type="datetime-local" id="regularbox" 
                       name="dataPagamento" step="1"
                 {...register("dataPagamento", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres'
                  }
                })}
          />                           
       
      </div>

</div>

      <div className="input-group-row">

                <div className="input-box">
                <label htmlFor="dataVencimento">Data de Vencimento</label>
                <input type="datetime-local" id="regularbox"       
                name="dataVencimento"       step="1"
       {...register("dataVencimento", {
        required: 'Preenchimento Obrigatório'})}
/>

       </div>
</div>

      <div className="input-group-row">

                <div className="input-box"> 
                <label htmlFor="valorPagamento">Valor do Pagamento (R$)</label>
                <input type="number" id="regularbox"                 
                 name="valorPagamento"
                 {...register("valorPagamento", {
                  required: 'Preenchimento Obrigatório'
                })}
           />                            
        
      </div>  
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