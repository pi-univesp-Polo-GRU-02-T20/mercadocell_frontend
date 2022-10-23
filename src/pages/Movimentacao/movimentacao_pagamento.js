import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useState } from "react";
import '../Cadastro/cadastro.css';
import api  from '../../components/Services/api';
import ListarOperacao from '../../components/Listas/listar_operacao';
import moment from 'moment';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));


export default function Movimentacao_pagamento() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    data.codPagamento = 0;
    data.dataPagamento = moment(data.dataPagamento).format("yyyy-MM-DD HH:mm:ss");
    data.dataVencimento = moment(data.dataVencimento).format("yyyy-MM-DD HH:mm:ss");
    data.operacao = {codOperacao:data.codOperacao};

    console.log('*** handleSubmit', data);
    setFormValues({});
    api.post("/pagamentoOperacao", data);
    alert("Cadastro Realizado");
  };




















  return (
<>

<div className="container grid-areas">

<div className="header">

   <DarkMode />
   <Navbar />

</div>

<div className="bodya">
<div className="form-fundo">
  <form onSubmit = {handleSubmit} >

  <div className="form-header">
      <div className="title">
              <h1>Incluir Pagamento</h1>
          </div>
    </div>

    <div className="input-group-column">

    <div className="input-group-row">

                  <div className="input-box">
                      <label htmlFor="nomeProduto">Operação</label>
                      <select type="text" id="doublebox" name="codOperacao" onChange={handleInputChange} value={formValues.codOperacao || ''}>
           <ListarOperacao/>
          
          </select>                 

      </div>

</div>

      <div className="input-group-row">

                  <div className="input-box">
                       <label htmlFor="dataPagamento">Data de Pagamento</label>
                       <input type="datetime-local" id="regularbox" name="dataPagamento" step="1" onChange={handleInputChange} value={formValues.dataPagamento || ''}/>                           
       
      </div>

                <div className="input-box">
                <label htmlFor="dataVencimento">Data de Vencimento</label>
                <input type="datetime-local" id="regularbox" name="dataVencimento" step="1" onChange={handleInputChange} value={formValues.dataVencimento || ''}/>

       </div>
</div>

      <div className="input-group-row">

                <div className="input-box"> 
                <label htmlFor="valorPagamento">Valor do Pagamento (R$)</label>
                <input type="number" id="regularbox" name="valorPagamento" onChange={handleInputChange} value={formValues.valorPagamento || ''}/>                            
        
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