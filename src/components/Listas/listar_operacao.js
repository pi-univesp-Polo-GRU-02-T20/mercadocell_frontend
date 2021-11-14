import React, { Component } from 'react';
import api from '../Services/api'

  class Listar_operacao extends Component {

    state = {
      operacoes: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/operacao');
  
      this.setState({ operacoes: response.data });
    }
  
    render() {
  
      const { operacoes } = this.state;
      const a = "          "
      
      return (
      <>
              {operacoes.map(filme => (
              <option id="codOperacao" name="codOperacao" value={filme.codOperacao} key={filme.codOperacao}>
                Nº{filme.codOperacao} &emsp;&emsp;&emsp; NF:{filme.codNotaFiscal}
              </option>
              ))}
      </>
        );
    };
  };

export default Listar_operacao;