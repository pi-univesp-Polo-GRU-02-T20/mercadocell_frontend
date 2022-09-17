import { useState } from 'react';
import Navbar from '../../components/Menu/Navbar';
import DarkMode  from '../../components/DarkMode';
import api  from '../../components/Services/api';
import './cadastro_categoria.css';

export default function Cadastro_categoria() { 

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
    api.post("/tipoPagamento", data);
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
                        <h1>Cadastrar</h1>
                        <h1>Tipo de Pagamento</h1>
                    </div>
                </div>

                <div className="input-group-column">

                    <div className="input-box">
                        <label htmlFor="nomeTipoPagamento">Tipo de Pagamento</label>
                        <input type="text" name="nomeTipoPagamento" id="regularbox" placeholder="Digite o tipo de pagamento" onChange={handleInputChange} value={formValues.nomeTipoPagamento || ''} required/>
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