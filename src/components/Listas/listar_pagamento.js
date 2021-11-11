import React, { Component } from 'react';
import api from '../Services/api'

  class Listar_pagamento extends Component {

    state = {
      pagamentos: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/categoria');
  
      this.setState({ pagamentos: response.data });
    }
  
    render() {
  
      const { pagamentos } = this.state;
      
      return (
      <>
              {pagamentos.map(filme => (
              <option id="nomeTipoPagamento" name="nomeTipoPagamento" value={filme.codTipoPagamento} key={filme.codTipoPagamento}>
                {filme.nomeTipoPagamento}
              </option>
              ))}
      </>
        );
    };
  };

export default Listar_pagamento;