import { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import DarkMode  from '../../components/DarkMode';
import api  from '../../components/Services/api';
import './cadastro_categoria.css';

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

                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input type="date" name="dataNascimento" id="regularbox" placeholder="Data de nascimento" onChange={handleInputChange} value={formValues.dataNascimento || ''} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="estadoNaturalidade">Naturalidade (UF)</label>
                        <input type="text" name="estadoNaturalidade" id="regularbox" placeholder="Naturalidade (UF)" onChange={handleInputChange} value={formValues.estadoNaturalidade || ''} required/>
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