import React, { useState } from 'react'
import { HiUser } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { sendPasswordResetEmail } from 'firebase/auth'


import './Login.css'


export default function Redefinir() {
  const [email, setEmail] = useState('')

  const navigate = useNavigate();

  

//redefinir Senha
async function forgotPassword(e){
    e.preventDefault();
    //redefinir Senha
    await sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Verifique sua caixa de e-mail.')
            navigate('/')
        })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}

    return (
      <div className="log_fundo">
      <form className = "redefinir_form" onSubmit={forgotPassword}>

      <div className="log_titulo">
        <h1>Recuperar Senha</h1>
      </div>

      <div> <p>Insira seu email para redefinir a sua senha</p> </div>
        <br></br>
      <div className="log_campo">
      <div className="login-loginInputEmail">
              <HiUser />
              <input
                id="user"
                type="text"
                name="login"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value) } 
              />
        
      </div>

  
            <button type="submit"> Enviar </button>
            </div>
           
      </form>
      </div>
    );
}

