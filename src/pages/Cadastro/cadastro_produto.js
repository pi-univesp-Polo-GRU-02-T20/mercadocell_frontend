import React, { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import './cadastro.css';
import api  from '../../components/Services/api';
import ListarCategoria from '../../components/Listas/listar_categoria';
import ListarSubcategoria from '../../components/Listas/listar_subcategoria';
import ListarUnidadedemedida from '../../components/Listas/listar_unidadedemedida';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_produto() {

  const [formValues, setFormValues] = useState({})

  const [image, setImage] = useState('');

  const handleInputChange = (e) => {
      const {target} = e;
      const {name, value} = target;
      setFormValues({...formValues, [name]: value});
  }

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Upload Imagem");
    const formData = new FormData();

    formData.append('arqImagem', image);
    formData.append('codigoSubcategoria', formValues.codigoSubcategoria);
    formData.append('codigoUnidadeMedida', formValues.codigoUnidadeMedida);
    formData.append('descricaoProduto', formValues.descricaoProduto);
    formData.append('nomeProduto', formValues.nomeProduto);
    formData.append('quantidadeEstoqueAtual', formValues.quantidadeEstoqueAtual);
    formData.append('quantidadeEstoqueMaximo', formValues.quantidadeEstoqueMaximo);
    formData.append('quantidadeEstoqueMinimo', formValues.quantidadeEstoqueMinimo);
    
    console.log(formData);

    await api.post("/produto/cadastrarProdutoComImagem", formData)
    .then((response) => {
      console.log(response);
    }).catch((err) => {
      if(err.response){
        console.log(err.response);
      }else{
        console.log("Erro: Tente mais tarde!")
      }
    });
  }

  console.log(formValues);

  return (
  <>

  <div className="container grid-areas">

  <div className="header">

     <DarkMode />
     <Navbar />

  </div>
  
  <div className="bodya">

    <div className="form-fundo">
    <form onSubmit = {onSubmit} >

    <div className="form-header">
          <div className="title">
              <h1>Cadastrar Produto</h1>
          </div>
    </div>


    <div className="input-group-column">
    <div className="input-group-row">

                <div className="input-box">
                      <label htmlFor="nomeProduto">Nome do Produto</label>
                      <input type="text" id="doublebox" name="nomeProduto" onChange={handleInputChange}/>
                </div>

                <div className="input-box">
                      <label htmlFor="unidadeMedida.Imagem">Inserir Imagem</label>
                      <input type="file" id="arqImagem" name="arqImagem" onChange={e => setImage(e.target.files[0])}/>
                </div>
    </div>
    


    
    <div className="input-group-row">

            <div className="input-box">
                  <label htmlFor="codigoCategoria">Categoria</label>
                  <select type="number" id="codigoCategoria" name="codigoCategoria">
                    <option selected disabled hidden> Selecione uma categoria </option>
                    <ListarCategoria />
                  </select>          
            </div>

            <div className="input-box">                  
                  <label htmlFor="codigoSubcategoria">Subcategoria</label>
                  <select type="number" id="codigoSubcategoria" name="codigoSubcategoria" onChange={handleInputChange}>
                      <option selected disabled hidden> Selecione uma subcategoria </option>
                      <ListarSubcategoria />
                  </select>
            </div>

            <div className="input-box">
                  <label htmlFor="codigoUnidadeMedida">Unidade de Medida</label>
                  <select type="number" id="codigoUnidadeMedida" name="codigoUnidadeMedida" onChange={handleInputChange}>
                      <option selected disabled hidden> Selecione uma unidade </option>
                      <ListarUnidadedemedida />
                  </select>
            </div>

    </div>
    
    

    <div className="input-group-row">
    <div className="input-box">
          <label htmlFor="descricaoProduto">Descrição</label>
          <textarea type="text" id="textarea" name="descricaoProduto" onChange={handleInputChange}/>
    </div>
    </div>
    


   
    <div className="input-group-row">

      
    <div className="input-box">  
          <label htmlFor="qtd_estoque_minimo">Qtd. de estoque mínimo</label>
          <input type="number" id="quantidadeEstoqueMinimo" name="quantidadeEstoqueMinimo" onChange={handleInputChange}/>
    </div>

    <div className="input-box">
          <label htmlFor="qtd_estoque_maximo">Qtd. de estoque máximo</label>
          <input type="number" id="quantidadeEstoqueMaximo" name="quantidadeEstoqueMaximo" onChange={handleInputChange}/>
    </div>

    <div className="input-box">
          <label htmlFor="qtd_estoque_atual">Qtd. de estoque atual</label>
          <input type="number" id="quantidadeEstoqueAtual" name="quantidadeEstoqueAtual" onChange={handleInputChange}/>
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