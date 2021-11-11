import React from 'react';
import axios from 'axios';

export default function validar() {
    return(
    axios
    .post("http://localhost:8080/usuario/validarSenha", values)
    .then((response) => {
    
    if (response.data == true){
        return(true)
    }
  
  })
    )
  }
