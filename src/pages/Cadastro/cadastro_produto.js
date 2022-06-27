import React, { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import { useForm } from "react-hook-form";
import './cadastro_produto.css';
import  api  from '../../components/Services/api';
import ListarCategoria from '../../components/Listas/listar_categoria';
import ListarSubcategoria from '../../components/Listas/listar_subcategoria';
import ListarUnidadedemedida from '../../components/Listas/listar_unidadedemedida';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_produto() {

  const { register, handleSubmit} = useForm();
  const [image, setImage] = useState('');
  const [nomeProduto, setnomeProduto] = useState('');
  const [codigoSubcategoria, setcodigoSubcategoria] = useState('');
  const [codigoUnidadeMedida, setcodigoUnidadeMedida] = useState('');
  const [descricaoProduto, setdescricaoProduto] = useState('');
  const [quantidadeEstoqueMinima, setquantidadeEstoqueMinima] = useState('');
  const [quantidadeEstoqueMaxima, setquantidadeEstoqueMaxima] = useState('');
  const [quantidadeEstoqueAtual, setquantidadeEstoqueAtual] = useState('');
  const objeto = {
    nomeProduto: '24',
    codigoSubcategoria: 1,
    codigoUnidadeMedida: 1,
    descricaoProduto: 'qqqqq',
    quantidadeEstoqueMinimo: 1,
    quantidadeEstoqueMaximo: 2,
    quantidadeEstoqueAtual: 2,
    arqImagem: 'w',
  };

  //const obj = { codigoProduto: 0 , codigoImagem: 22 };
  //var x;
  //var y;

  const headers = {
    'Content-Type': 'application/json',
  }






  const onSubmit = (data) => {
    console.log("Data:", data);
    console.log("Objeto", objeto);


    /*
    api.post("/produto", data)
    .then(function (response1) {
      x = (response1.data.codProduto);
      console.log("Código do Produto:", response1.data.codProduto);
      console.log("Cproduto", obj.codigoProduto);
    })
    */

    uploadImage();
  };



    
    
  const uploadImage = async e => {

  const formData = new FormData();
  formData.append('arqImagem', image);
  formData.append('objeto', JSON.stringify(objeto));
  console.log("FormData", formData);
  console.log("Objeto2", objeto);
  await api.post("/produto", objeto);
};






/*
    const uploadImage = async e => {
      const formData = new FormData();
      formData.append('arqImagem', image);
      console.log(formData);
      await api.post("/imagem/cadastrarImagem", formData)
      .then (function (response2) {
        y = (response2.data.codigoImagem);
        console.log("Código da Imagem:", response2.data.codigoImagem);
        console.log("Cimagem", obj.codigoImagem);
      })
     
    }
*/




/*
  const vincular = async e => {
    const obj2 = {};
    obj2.codigoImagem =  x;
    obj2.codigoProduto = y;
    console.log("VINCULAR", obj2);
    await api.post("/imagem​/vincularImagemProduto", (obj.codigoProduto + obj.codigoImagem));
  }
*/






/*
const vincular = async e => {
  const obj2 = JSON.parse(JSON.stringify(obj));
  console.log("FIM", obj2);
  console.log("Z", z);
  await api.post("/imagem​/vincularImagemProduto", obj2);
}
*/



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
                 onChange={e => setnomeProduto(e.target.files[0])}
                 {...register("nomeProduto", {
                  required: 'Preenchimento Obrigatório',
                })}
     
           />
           

          <div className="erro">

          </div>

      </div>

     

    </div>

    <div className="produto_linha">

      <div className="produto_campo">

      <label htmlFor="subCategoria.categoria.codCategoria">Categoria</label>
          <select 
                 type="text" 
                 id="subCategoria.categoria.codCategoria" 
                 name="subCategoria.categoria.codCategoria"

           >
             <option selected disabled hidden> Selecione uma categoria </option>
             <ListarCategoria />
          </select>          

                      

      </div>

      <div className="produto_campo">

      <label htmlFor="codigoSubcategoria">Subcategoria</label>
      <select
       type="number" 
       id="codigoSubcategoria" 
       name="codigoSubcategoria"
       onChange={e => setcodigoSubcategoria(e.target.files[0])}
       {...register("codigoSubcategoria", {
        required: 'Preenchimento Obrigatório'
      })}
>
<option selected disabled hidden> Selecione uma subcategoria </option>
   <ListarSubcategoria />
  </select>


</div>


      <div className="produto_campo">

          <label htmlFor="codigoUnidadeMedida">Unidade de Medida</label>
          <select 
                 type="number" 
                 id="codigoUnidadeMedida" 
                 name="codigoUnidadeMedida"
                 onChange={e => setcodigoUnidadeMedida(e.target.files[0])}
                 {...register("codigoUnidadeMedida", {
                  required: 'Preenchimento Obrigatório',
                })}  
          >

          <option selected disabled hidden> Selecione uma unidade </option>
             <ListarUnidadedemedida />
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
                 onChange={e => setdescricaoProduto(e.target.files[0])}
                 {...register("descricaoProduto")}
           />

        <div className="erro">

        </div>

      </div>  
      </div>








      <div className="produto_linha">

        <div className="produto_campo2">

          <label htmlFor="qtd_estoque_minimo">Qtd. de estoque mínimo</label>
          <input 
                 type="number" 
                 id="quantidadeEstoqueMinima" 
                 name="quantidadeEstoqueMinima"
                 onChange={e => setquantidadeEstoqueMinima(e.target.files[0])}
                 {...register("quantidadeEstoqueMinima")}
           />

          <div className="erro">                   

          </div>                        

        </div>

        <div className="produto_campo2">

          <label htmlFor="qtd_estoque_maximo">Qtd. de estoque máximo</label>
          <input 
                 type="number" 
                 id="quantidadeEstoqueMaxima" 
                 name="quantidadeEstoqueMaxima"
                 onChange={e => setquantidadeEstoqueMaxima(e.target.files[0])}
                 {...register("quantidadeEstoqueMaxima")}
           />

          <div className="erro">                   

          </div>    

        </div>


      <div className="produto_campo2">

          <label htmlFor="qtd_estoque_atual">Qtd. de estoque atual</label>
          <input 
                 type="number" 
                 id="quantidadeEstoqueAtual" 
                 name="quantidadeEstoqueAtual"
                 onChange={e => setquantidadeEstoqueAtual(e.target.files[0])}
                 {...register("quantidadeEstoqueAtual")}
           />

          <div className="erro">                   

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