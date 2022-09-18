import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
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
              <h1>Operação de compra</h1>
          </div>
    </div>

    <div className="input-group-column">

    <div className="input-group-row">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Código da Nota Fiscal</label>
                      <input type="text" id="doublebox" name="codNotaFiscal"/>
                </div>

                <div className="input-box">
                      <label htmlFor="nomeProduto">Status da Operação</label>
                      <select type="text" id="regularbox" name="tipoStatusOperacao">
                          <option selected disabled hidden> Selecione um status </option>
                          <option value="P" key="pedido">Pedido</option>
                          <option value="O" key="orcamento">Orçamento</option>
                      </select>
                </div>

    </div>

    <div className="input-group-row">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Data da Operação</label>
                      <input type="datetime-local" id="regularbox" name="dataOperacao" step="1"/>
                </div>

                <div className="input-box">
                      <label htmlFor="nomeProduto">Código de Pessoa</label>
                      <select type="text" id="regularbox" name="pessoa.codPessoa">
                          <option selected disabled hidden> Selecione um código </option>
                          <ListarPessoa />
                      </select>
                </div>

                <div className="input-box">
                      <label htmlFor="nomeProduto">Tipo de pagamento</label>
                      <select type="text" id="regularbox" name="tipoPagamento.codTipoPagamento">
                          <option selected disabled hidden> Selecione uma opção </option>
                          <ListarPagamento />
                      </select>
                </div>

    </div>

    <div className="input-group-row-left">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Quantidade de Parcelas</label>
                      <select type="text" id="regularbox" name="quantidadeParcela">
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
                      <input type="number" min="1" step="any" id="regularbox" name="valorTotal"/>
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