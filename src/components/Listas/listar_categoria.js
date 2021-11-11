import React, { Component } from 'react';
import api from '../Services/api'

  class Listar_categoria extends Component {

    state = {
      categorias: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/categoria');
  
      this.setState({ categorias: response.data });
    }
  
    render() {
  
      const { categorias } = this.state;
      
      return (
      <>
              {categorias.map(filme => (
              <option id="nomeCategoria" name="nomeCategoria" value={filme.codCategoria} key={filme.codCategoria}>
                {filme.nomeCategoria}
              </option>
              ))}
      </>
        );
    };
  };

export default Listar_categoria;