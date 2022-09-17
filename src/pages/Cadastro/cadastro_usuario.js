import { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import DarkMode  from '../../components/DarkMode';
import api  from '../../components/Services/api';
import ListarCodpessoa from '../../components/Listas/listar_codpessoa';
import './cadastro_categoria.css';

export default function Cadastro_usuario() { 

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
    api.post("/usuario", data);
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
                        <h1>Cadastrar Usuário</h1>
                    </div>
                </div>

                <div className="input-group-column">
                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="nomePessoa">Nome de usuário</label>
                        <input type="text" name="nomePessoa" id="doublebox" placeholder="Nome" onChange={handleInputChange} value={formValues.nomePessoa || ''} required/>
                    </div>
                </div>

                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="dataNascimento">Código de Pessoa</label>
                        <select type="date" name="dataNascimento" id="regularbox" placeholder="Data de nascimento" onChange={handleInputChange} value={formValues.dataNascimento || ''} required>
                        <ListarCodpessoa/>
                        </select>
                    </div>
                    <div className="input-box">
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" id="regularbox" placeholder="Naturalidade (UF)" onChange={handleInputChange} value={formValues.login || ''} required/>
                    </div>
                </div>

                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="regularbox" placeholder="Data de nascimento" onChange={handleInputChange} value={formValues.dataNascimento || ''} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="estadoNaturalidade">Confirmar senha</label>
                        <input type="password" name="estadoNaturalidade" id="regularbox" placeholder="Naturalidade (UF)" onChange={handleInputChange} value={formValues.estadoNaturalidade || ''} required/>
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