import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import api  from '../../components/Services/api';
import ListarCategoria from '../../components/Listas/listar_categoria';
import './cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_subcategoria() {

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
    console.log('*** handleSubmit', data);
    setFormValues({});
    //api.post("/subCategoria", data);
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

      <form onSubmit={handleSubmit}>

      <div className="form-header">
                    <div className="title">
                        <h1>Cadastrar Subcategoria</h1>
                    </div>
      </div>

          <div className="input-group-column">

          <div className="input-box">
          <label htmlFor="categoria.codCategoria"> Categoria </label>
          <select   id="regularbox" name="categoria.codCategoria" onChange={handleInputChange}  required>
          <ListarCategoria />
          </select>
          </div>
           


          <div className="input-box">
          <label htmlFor="nomeSubCategoria"> Nome da Subcategoria </label>
          <input type="text" name="nomeSubCategoria" id="regularbox" placeholder="Digite o nome da subcategoria" onChange={handleInputChange} value={formValues.nomeSubCategoria || ''} required/>
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