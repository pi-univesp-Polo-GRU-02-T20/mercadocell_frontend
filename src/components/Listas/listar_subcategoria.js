import React, { Component } from 'react';
import api from '../Services/api'

  class Listar_subcategoria extends Component {

    state = {
      subcategorias: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/subCategoria');
  
      this.setState({ subcategorias: response.data });
    }
  
    render() {
  
      const { subcategorias } = this.state;
      
      return (
      <>
              {subcategorias.map(filme => (
              <option id="nomeSubCategoria" name="nomeSubCategoria" value={filme.codSubCategoria} key={filme.codSubCategoria}>{filme.nomeSubCategoria}</option>
              ))}
      </>
        );
    };
  };

export default Listar_subcategoria;