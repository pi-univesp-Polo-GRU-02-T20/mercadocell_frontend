import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import UIButton from '../../components/UI/Button/Button';
import { HiUser, HiLockClosed } from "react-icons/hi";


import './Login.css'




function initialState() {
  return { login: '', senha: '' };
}

export default function Rlogin() {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();


  values.codPessoa = 1;
  values.codUsuario = 8;
  values.ativo = true;
  values.nomePessoa = "Leandro Wing";


function login() {
    // eslint-disable-next-line
    if (true === true) {
      return { token: '1234' };
    }
    return { error: 'Usuário ou senha inválido' };
        
}

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });

  }

  function onSubmit(event) {

    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

    return (
      <div className="log_fundo">
      <form className = "log_form" onSubmit={onSubmit}>

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
                placeholder="Usuário"
                value={values.login}
                onChange={onChange} />
        
      </div>


      <div className="login-loginInputPassword">
           
              <HiLockClosed />
              <input
                id="password"
                type="password"
                name="senha"
                placeholder="Senha"
                value={values.senha}
                onChange={onChange} />

            </div>
  
            <UIButton
              type="submit"
              theme="contained-green"
              className="user-login__submit-button"
              rounded
            >
              Acessar
            </UIButton>
            </div>
           
      </form>
      </div>
    );
}

