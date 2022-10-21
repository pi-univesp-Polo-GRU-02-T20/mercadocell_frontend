import React, { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';

import api  from '../../components/Services/api';
import './cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_pessoajuridica() { 

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
    api.post("/pessoaJuridica", data);
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
                        <h1>Cadastrar Pessoa Jurídica</h1>
                    </div>
                </div>

                <div className="input-group-column">
                
                    <div className="input-box">
                        <label htmlFor="nomePessoa">Nome Fantasia</label>
                        <input type="text" name="nomePessoa" id="doublebox" placeholder="Digite o Nome Fantasia" onChange={handleInputChange} value={formValues.nomePessoa || ''} required/>
                    </div>
                

                
                    <div className="input-box">
                        <label htmlFor="nomeRazaoSocial">Razão Social</label>
                        <input type="text" name="nomeRazaoSocial" id="doublebox" placeholder="Digite a Razão Social" onChange={handleInputChange} value={formValues.nomeRazaoSocial || ''} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="codCNPJ">CNPJ</label>
                        <input type="text" name="codCNPJ" id="regularbox" placeholder="Digite o CNPJ" onChange={handleInputChange} value={formValues.codCNPJ || ''} required/>
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