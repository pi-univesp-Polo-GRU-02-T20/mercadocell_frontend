import React, { Component } from 'react';
import api from '../Services/api'

  class ListarCodpessoa extends Component {

    state = {
      codpessoas: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/pessoaFisica');
  
      this.setState({ codpessoas: response.data });
    }
  
    render() {
  
      const { codpessoas } = this.state;
      
      return (
      <>
              {codpessoas.map(filme => (
              <option id="codPessoa" name="codPessoa" value={filme.codPessoa} key={filme.codPessoa}>
                {filme.codPessoa}
              </option>
              ))}
      </>
        );
    };
  };

export default ListarCodpessoa;