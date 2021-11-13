import React, { Component } from 'react';
import api from '../Services/api'

  class Listar_pessoa extends Component {

    state = {
      pessoas: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/pessoaJuridica');
  
      this.setState({ pessoas: response.data });
    }
  
    render() {
  
      const { pessoas } = this.state;
      
      return (
      <>
              {pessoas.map(filme => (
              <option id="nomePessoa" name="nomePessoa" value={filme.codPessoa} key={filme.codPessoa}>
                {filme.codPessoa} - {filme.nomePessoa}
              </option>
              ))}
      </>
        );
    };
  };

export default Listar_pessoa;