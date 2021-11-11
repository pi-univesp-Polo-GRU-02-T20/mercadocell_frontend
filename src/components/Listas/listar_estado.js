import React, { Component } from 'react';
import api from '../Services/api'

  class Listar_estado extends Component {

    state = {
      estados: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/categoria');
  
      this.setState({ estados: response.data });
    }
  
    render() {
  
      const { estados } = this.state;
      
      return (
      <>
              {estados.map(filme => (
              <option id="nomeEstado" name="nomeEstado" value={filme.codEstado} key={filme.codEstado}>{filme.nomeEstado}</option>
              ))}
      </>
        );
    };
  };

export default Listar_estado;