import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import './cadastro_produto.css';
import  api  from '../../components/Services/api';
import LISTAR_CATEGORIA from '../../components/Listas/listar_categoria';
import LISTAR_SUBCATEGORIA from '../../components/Listas/listar_subcategoria';
import LISTAR_UNIDADEDEMEDIDA from '../../components/Listas/listar_unidadedemedida';
import  DarkMode  from '../../components/DarkMode';

export default function Cadastro_produto() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    api.post("/produto", data);
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

    <form className="produto_form" onSubmit = { handleSubmit(onSubmit) } >

    <div className="produto_titulo">
    <h1>Cadastrar Produto</h1>
    </div>

    <div className="produto_linha">

      <div className="produto_campo">

          <label htmlFor="nomeProduto">Nome do Produto</label>
          <input 
                 type="text" 
                 id="nomeProduto" 
                 name="nomeProduto"
                 {...register("nomeProduto", {
                  required: 'Preenchimento Obrigatório',
                })}
           />

          <div className="erro">
          <ErrorMessage errors={errors} name="nomeProduto">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
          </ErrorMessage>
          </div>

      </div>

      <div className="produto_campo">

<label htmlFor="unidadeMedida.Imagem">Inserir Imagem</label>

<input type="file" />

</div>

    </div>

    <div className="produto_linha">

      <div className="produto_campo">

          <label htmlFor="subCategoria.categoria.codCategoria">Categoria</label>
          <select 
                 type="text" 
                 id="subCategoria.categoria.codCategoria" 
                 name="subCategoria.categoria.codCategoria"
                 {...register("subCategoria.categoria.codCategoria", {
                  required: 'Preenchimento Obrigatório',
                })}
           >
             <option hidden disabled selected value> Selecione uma categoria </option>
             <LISTAR_CATEGORIA />
          </select>                           

      </div>

      <div className="produto_campo">

<label htmlFor="subCategoria.codSubCategoria">Subcategoria</label>
<select 
       type="text" 
       id="subCategoria.codSubCategoria" 
       name="subCategoria.codSubCategoria"
       {...register("subCategoria.codSubCategoria", {
        required: 'Preenchimento Obrigatório'
      })}
 >
   <option hidden disabled selected value> Selecione uma subcategoria </option>
   <LISTAR_SUBCATEGORIA />
</select>

</div>


      <div className="produto_campo">

          <label htmlFor="unidadeMedida.codUnidadeMedida">Unidade de Medida</label>
          <select 
                 type="text" 
                 id="unidadeMedida.codUnidadeMedida" 
                 name="unidadeMedida.codUnidadeMedida"
                 {...register("unidadeMedida.codUnidadeMedida", {
                  required: 'Preenchimento Obrigatório',
                })}
           >
             <option hidden disabled selected value> Selecione uma unidade </option>
             <LISTAR_UNIDADEDEMEDIDA />
          </select>
                             
      </div>



      </div>



    <div className="produto_linha">
      <div className="produto_campo">
        <label htmlFor="descricaoProduto">Descrição</label>
        <textarea 
                 type="text" 
                 id="descricaoProduto" 
                 name="descricaoProduto"
                 {...register("descricaoProduto")}
           />

        <div className="erro">
        <ErrorMessage errors={errors} name="descricaoProduto">
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
        </ErrorMessage>
        </div>

      </div>  
      </div>








      <div className="produto_linha">

        <div className="produto_campo2">

          <label htmlFor="qtd_estoque_minimo">Qtd. de estoque mínimo</label>
          <input 
                 type="number" 
                 id="qtd_estoque_minimo" 
                 name="qtd_estoque_minimo"
                 {...register("valorPagamento", {
                  required: 'Preenchimento Obrigatório'
                })}
           />

          <div className="erro">                   
          <ErrorMessage errors={errors} name="qtd_estoque_minimo">
          {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
          </ErrorMessage>
          </div>                        

        </div>

        <div className="produto_campo2">

          <label htmlFor="qtd_estoque_maximo">Qtd. de estoque máximo</label>
          <input 
                 type="number" 
                 id="qtd_estoque_maximo" 
                 name="qtd_estoque_maximo"
                 {...register("qtd_estoque_maximo", {
                  required: 'Preenchimento Obrigatório'
                })}
           />

          <div className="erro">                   
          <ErrorMessage errors={errors} name="qtd_estoque_maximo">
          {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
          </ErrorMessage>
          </div>    

        </div>


      <div className="produto_campo2">

          <label htmlFor="qtd_estoque_atual">Qtd. de estoque atual</label>
          <input 
                 type="number" 
                 id="qtd_estoque_atual" 
                 name="qtd_estoque_atual"
                 {...register("qtd_estoque_atual", {
                  required: 'Preenchimento Obrigatório'
                })}
           />

          <div className="erro">                   
          <ErrorMessage errors={errors} name="qtd_estoque_atual">
          {({ messages }) => messages && Object.entries(messages).map(([type, message]) => ( <p key={type}>{message}</p>))}
          </ErrorMessage>
          </div>    
                             
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