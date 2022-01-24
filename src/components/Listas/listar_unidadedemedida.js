import React, { Component } from 'react';
import api from '../Services/api'

  class LISTAR_UNIDADEDEMEDIDA extends Component {

    state = {
      unidadesdemedida: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/unidadeMedida');
  
      this.setState({ unidadesdemedida: response.data });
    }
  
    render() {
  
      const { unidadesdemedida } = this.state;
      
      return (
      <>
              {unidadesdemedida.map(filme => (
              <option id="nomeUnidadeMedida" name="nomeUnidadeMedida" value={filme.codUnidadeMedida} key={filme.codUnidadeMedida}>
                {filme.nomeUnidadeMedida}
              </option>
              ))}
      </>
        );
    };
  };

export default LISTAR_UNIDADEDEMEDIDA;