import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './movimentacao_pagamento.css';
import  api  from '../../components/Services/api';
import Listar_categoria from '../../components/Listas/listar_categoria';
import Listar_subcategoria from '../../components/Listas/listar_subcategoria';
import Listar_unidadedemedida from '../../components/Listas/listar_unidadedemedida';

export default function Movimentacao_pagamento() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    api.post("/produto", data);
  }

  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">

    <form className="pagamento_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="pagamento_titulo">
    <h1>Incluir Pagamento</h1>
    </div>

    <div className="pagamento_linha">

      <div className="pagamento_campo">

          <label htmlFor="codOperacao">Operação</label>
          <select 
                 type="text" 
                 id="codOperacao" 
                 name="codOperacao"
                 {...register("codOperacao", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres' 
                  }
                })}
          >


         

          
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
       {...register("dataVencimento", {
        required: 'Preenchimento Obrigatório',
        minLength: {
          value: 2,
          message: 'No minimo dois caracteres' 
        }
      })}
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
                 type="text" 
                 id="valorPagamento" 
                 name="valorPagamento"
                 {...register("valorPagamento", {
                  required: 'Preenchimento Obrigatório',
                  minLength: {
                    value: 2,
                    message: 'No minimo dois caracteres'
                  }
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
  </>
  );
}