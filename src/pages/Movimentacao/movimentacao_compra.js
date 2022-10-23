import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useState } from 'react';
import '../Cadastro/cadastro.css';
import api  from '../../components/Services/api';
import ListarPagamento from '../../components/Listas/listar_pagamento';
import ListarPessoa from '../../components/Listas/listar_pessoa';
import moment from 'moment';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));


export default function Movimentacao_compra() {

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

        data.codOperacao = 0;
        data.tipoOperacao = "C";
        data.dataOperacao = moment(data.dataOperacao).format("yyyy-MM-DD HH:mm:ss");
        data.pago = true;
        data.pessoa = {codPessoa:data.codPessoa, nomePessoa:data.nomePessoa};       
        data.tipoPagamento = {codTipoPagamento: data.codTipoPagamento}

        console.log('*** handleSubmit', data);
        setFormValues({});
        api.post("/operacao", data);
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
              <h1>Operação de compra</h1>
          </div>
    </div>

    <div className="input-group-column">

    <div className="input-group-row">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Código da Nota Fiscal</label>
                      <input type="text" id="doublebox" name="codNotaFiscal" onChange={handleInputChange} value={formValues.codNotaFiscal || ''}/>
                </div>

                <div className="input-box">
                      <label htmlFor="nomeProduto">Status da Operação</label>
                      <select type="text" id="regularbox" name="tipoStatusOperacao" onChange={handleInputChange} value={formValues.tipoStatusOperacao || ''}>
                          <option selected disabled hidden> Selecione um status </option>
                          <option value="P" key="pedido">Pedido</option>
                          <option value="O" key="orcamento">Orçamento</option>
                      </select>
                </div>

    </div>

    <div className="input-group-row">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Data da Operação</label>
                      <input type="datetime-local" id="regularbox" name="dataOperacao" step="1" onChange={handleInputChange} value={formValues.dataOperacao || ''}/>
                </div>

                <div className="input-box">
                      <label htmlFor="nomeProduto">Código de Pessoa</label>
                      <select type="text" id="regularbox" name="codPessoa" onChange={handleInputChange} value={formValues.codPessoa || ''}>
                          <option selected disabled hidden> Selecione um código </option>
                          <ListarPessoa />
                      </select>
                </div>

                <div className="input-box">
                      <label htmlFor="nomeProduto">Tipo de pagamento</label>
                      <select type="text" id="regularbox" name="codTipoPagamento" onChange={handleInputChange} value={formValues.codTipoPagamento || ''}>
                          <option selected disabled hidden> Selecione uma opção </option>
                          <ListarPagamento />
                      </select>
                </div>

    </div>

    <div className="input-group-row-left">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Quantidade de Parcelas</label>
                      <select type="text" id="regularbox" name="quantidadeParcela" onChange={handleInputChange} value={formValues.quantidadeParcela || ''}>
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
                </div>
      
                <div className="input-box">
                      <label htmlFor="nomeProduto">Valor Total (R$)</label>
                      <input type="number" min="1" step="any" id="regularbox" name="valorTotal" onChange={handleInputChange} value={formValues.valorTotal || ''}/>
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