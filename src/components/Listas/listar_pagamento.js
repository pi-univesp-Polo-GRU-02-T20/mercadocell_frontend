import React, { Component } from 'react';
import api from '../Services/api'

  class LISTAR_PAGAMENTO extends Component {

    state = {
      pagamentos: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/tipoPagamento');
  
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



              {pagamentos.map(filme => (
              <p>
                {filme.nomeTipoPagamento}
              </p>
              ))}

              

      </>
        );
    };
  };

export default LISTAR_PAGAMENTO;