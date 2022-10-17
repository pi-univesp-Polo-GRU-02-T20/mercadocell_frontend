import React, { useState } from 'react'
import { HiUser, HiLockClosed } from "react-icons/hi";
import { useNavigate, Link } from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'


import './Login.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navegar para /admin
        navigate('/home', { replace: true } )
      })
      .catch(() => {
        alert("Email ou senha incorreto!")
        console.log("ERRO AO FAZER O LOGIN")
      })

    }else{
      alert("Preencha todos os campos!")
    }


  }

    return (
      <div className="log_fundo">
      <form className = "log_form" onSubmit={handleLogin}>

      <div className="log_titulo">
        <h1>Login</h1>
      </div>

      <div className="log_campo">
      <div className="login-loginInputEmail">
              <HiUser />
              <input
                id="user"
                type="text"
                name="login"
                placeholder="Digite seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value) } 
              />
        
      </div>


      <div className="login-loginInputPassword">
           
              <HiLockClosed />
              <input
                autoComplete={false}
                id="password"
                type="password"
                name="senha"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value) } />

            </div>

  
            <button type="submit"> Acessar </button>
            <Link to='/redefinir'> <div className="RecoverPassword"> Esqueceu a senha? </div> </Link>
            </div>
           
      </form>
      </div>
    );
}

