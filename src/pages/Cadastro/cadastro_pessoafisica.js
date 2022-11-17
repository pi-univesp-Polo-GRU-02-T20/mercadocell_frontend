import React, { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';
import api  from '../../components/Services/api';
import './cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_pessoafisica() { 

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
    api.post("/pessoaFisica", data);
    alert("Cadastro Realizado");
  };

  const checkCEP = (e) => {

    if (!e.target.value) return; 

    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    }

    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
        .then(res => res.json()).then(data => {
        console.log(data);
        setFormValues({ ...formValues, logradouro: data.logradouro, 
                                       bairro: data.bairro, 
                                       localidade: data.localidade, 
                                       uf: data.uf });

    })
    .catch((err) => console.log(err));

//    setValue(prevState => {
  //      return { ...prevState, value1: "novo valor" }
 //   });
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
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <div className="title">
                        <h1>Cadastrar Pessoa Física</h1>
                    </div>
                </div>

                <div className="input-group-column">

                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="nomePessoa">Nome</label>
                        <input type="text" name="nomePessoa" id="doublebox" placeholder="Nome" onChange={handleInputChange} value={formValues.nomePessoa || ''} required/>
                    </div>
                </div>

                <div className="input-group-row-left">
                    <div className="input-box">
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input type="date" name="dataNascimento" id="regularbox" placeholder="Data de nascimento" onChange={handleInputChange} value={formValues.dataNascimento || ''} required/>
                    </div>
                </div>
        

                                <div class="gender-inputs">

                    <div class="gender-title">
                        <p>Gênero</p>
                    </div>

                    <div class="gender-group">
                        <div class="gender-input">
                            <input id="female" type="radio" name="tipoSexo" value="M" onChange={handleInputChange} checked={formValues.tipoSexo === 'M'}/>
                            <label for="female">Feminino</label>
                        </div>
                        <div class="gender-input">
                            <input id="male" type="radio" name="tipoSexo" value="F" onChange={handleInputChange} checked={formValues.tipoSexo === 'F'}/>
                            <label for="male">Masculino</label>
                        </div>
                    </div>

                </div>

                <div className="input-group-row-left">

                <div className="input-box">
                        <label htmlFor="cep">CEP</label>
                        <input type="text" name="estadoNaturalidade" id="regularbox" placeholder="CEP" onBlur={checkCEP} onChange={handleInputChange} value={formValues.estadoNaturalidade || ''} required/>
                </div>

                </div>

                <div className="input-group-row">

                <div className="input-box">
                        <label htmlFor="logradouro">Rua</label>
                        <input type="text" name="logradouro" id="regularbox-filled" placeholder="" onChange={handleInputChange} value={formValues.logradouro || ''} disabled required/>
                </div>

                <div className="input-box">
                        <label htmlFor="numero">Número</label>
                        <input type="text" name="numero" id="regularbox" placeholder="Número" onChange={handleInputChange} value={formValues.numero || ''} required/>
                </div>

                </div>

                <div className="input-group-row">

                <div className="input-box">
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" name="complemento"  id="doublebox" placeholder="Complemento..." onChange={handleInputChange} value={formValues.complemento || ''} disabled="" required/>
                </div>

                </div>

                <div className="input-group-row-left">

                <div className="input-box">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" name="bairro"  id="regularbox-filled" placeholder="" onChange={handleInputChange} value={formValues.bairro || ''} disabled required/>
                </div>

                </div>

                <div className="input-group-row">

                <div className="input-box">
                        <label htmlFor="localidade">Cidade</label>
                        <input type="text" name="localidade" id="regularbox-filled" placeholder="" onChange={handleInputChange} value={formValues.localidade || ''} disabled required/>
                </div>

                <div className="input-box">
                        <label htmlFor="uf">Estado</label>
                        <input type="text" name="uf" id="regularbox-filled" placeholder="" onChange={handleInputChange} value={formValues.uf || ''} disabled required/>
                </div>

                </div>

                <div className="input-box-checkbox">
                        <input type="checkbox" id="aceito" name="termos" value="S" required/> 
                        <label htmlFor="termos"> Li e concordo com as <Link to="/privacidade" target="_blank">Políticas de privacidade</Link></label>
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