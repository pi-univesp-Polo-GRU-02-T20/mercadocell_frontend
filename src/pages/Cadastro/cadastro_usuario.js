import React, { useState } from 'react';
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Navbar from '../../components/Menu/Navbar';
import './cadastro.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Cadastro_usuario() { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setPassword2('');
        alert("Cadastro Realizado");
      })
      .catch(() => {
        console.log("ERRO AO FAZER O CADASTRO")
      })


    }else{
      alert("Preencha todos os campos!")
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
                        <label htmlFor="nomePessoa">Login</label>
                        <input type="text" name="nomePessoa" id="doublebox" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value) } value={email} required/>
                    </div>
                </div>

                <div className="input-group-row">
                    <div className="input-box">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="regularbox" placeholder="Digite a senha" onChange={(e) => setPassword(e.target.value) } value={password} required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirmarSenha">Confirmar senha</label>
                        <input type="password" name="confirmarSenha" id="regularbox" placeholder="Confirme a senha" onChange={(e) => setPassword2(e.target.value) } value={password2}  required/>
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