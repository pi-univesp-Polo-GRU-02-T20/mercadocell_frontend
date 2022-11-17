import React, { useState, useContext } from 'react';
import { Link, Navigate } from "react-router-dom";
import { HiUser, HiLockClosed } from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext";

import './Login.css'


export const Login = () => {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const { signIn, signed } = useContext(AuthContext);

  async function handleLogin(e){
    e.preventDefault();
    const data = {
      login,
      senha,
    };
    console.log('handleLogin', data);
    await signIn(data);

  }    
  if (!signed) {
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
                className={login !== "" ? "has-val input" : "input"}
                id="user"
                type="text"
                name="login"
                autoComplete="off"
                placeholder="Digite o login"
                value={login}
                onChange={(e) => setLogin(e.target.value) } 
              />
        
      </div>


      <div className="login-loginInputPassword">
           
              <HiLockClosed />
              <input
                className={senha !== "" ? "has-val input" : "input"}
                id="password"
                type="password"
                name="senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value) } />

            </div>

  
            <button type="submit"> Acessar </button>
            <Link to='/redefinir'> <div className="RecoverPassword"> Esqueceu a senha? </div> </Link>
            </div>
           
      </form>
      </div>
    );
} else {
  return <Navigate to="/home" />;
}

};

