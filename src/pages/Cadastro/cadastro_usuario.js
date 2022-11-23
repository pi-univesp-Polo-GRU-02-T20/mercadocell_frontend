import React, { useState } from 'react';
import api  from '../../components/Services/api';
import Navbar from '../../components/Menu/Navbar';
import './cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

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

  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if(formValues.senha === formValues.senha2){
      api.post("/auth/cadastrar", data)
      .then(() => {
        console.log('*** handleSubmit', data);
        setFormValues({});
        alert("Cadastro Realizado");
      })
      .catch(() => {
        console.log("ERRO AO FAZER O CADASTRO")
      })


    }else{
      alert("Senhas diferentes!")
    }
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
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" id="doublebox" placeholder="Digite seu login..." onChange={handleInputChange} value={formValues.login || ''} required/>
                    </div>
                </div>

                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="regularbox" placeholder="Digite a senha" onChange={handleInputChange} value={formValues.senha || ''} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="senha2">Confirmar senha</label>
                        <input type="password" name="senha2" id="regularbox" placeholder="Confirme a senha" onChange={handleInputChange} value={formValues.senha2|| ''}  required/>
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