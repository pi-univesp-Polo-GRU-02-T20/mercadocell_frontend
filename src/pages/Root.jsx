import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';

import Login from './Login/Login';
import Home from './Home/Home';
import Sobre from './Home/sobre';
import Mapa from './Home/mapa';

import Cadastro_categoria from './Cadastro/cadastro_categoria';
import Cadastro_subcategoria from './Cadastro/cadastro_subcategoria';
import Cadastro_unidadedemedida from './Cadastro/cadastro_unidadedemedida';
import Cadastro_produto from './Cadastro/cadastro_produto';
import Cadastro_pessoafisica from './Cadastro/cadastro_pessoafisica';
import Cadastro_pessoajuridica from './Cadastro/cadastro_pessoajuridica';
import Cadastro_tipopagamento from './Cadastro/cadastro_tipopagamento';
import Cadastro_usuario from './Cadastro/cadastro_usuario';


import Consulta_categoria from './Consulta/consulta_categoria';
import Consulta_subcategoria from './Consulta/consulta_subcategoria';
import Consulta_unidadedemedida from './Consulta/consulta_unidadedemedida';
import Consulta_produto from './Consulta/consulta_produto';
import Consulta_pessoafisica from './Consulta/consulta_pessoafisica';
import Consulta_pessoajuridica from './Consulta/consulta_pessoajuridica';
import Consulta_tipopagamento from './Consulta/consulta_tipopagamento.js';
import Consulta_usuario from './Consulta/consulta_usuario';
import Consulta_operacao from './Consulta/consulta_operacao';
import Consulta_pagamentocompra from './Consulta/consulta_pagamentocompra';
import Consulta_pagamentovenda from './Consulta/consulta_pagamentovenda';


import Movimentacao_compra from './Movimentacao/movimentacao_compra';
import Movimentacao_venda from './Movimentacao/movimentacao_venda';
import Movimentacao_pagamento from './Movimentacao/movimentacao_pagamento';
import Movimentacao_teste from './Movimentacao/movimentacao_teste';


const PagesRoot = () => (
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/" exact component={Home} />
          <RoutesPrivate path="/sobre" exact component={Sobre} />
          <RoutesPrivate path="/mapa" exact component={Mapa} />

          <RoutesPrivate path='/cadastro-categoria' component={Cadastro_categoria} />
          <RoutesPrivate path='/cadastro-subcategoria' component={Cadastro_subcategoria} />
          <RoutesPrivate path='/cadastro-unidadedemedida' component={Cadastro_unidadedemedida} />
          <RoutesPrivate path='/cadastro-produto' component={Cadastro_produto} />
          <RoutesPrivate path='/cadastro-pessoafisica' component={Cadastro_pessoafisica} />
          <RoutesPrivate path='/cadastro-pessoajuridica' component={Cadastro_pessoajuridica} />
          <RoutesPrivate path='/cadastro-tipopagamento' component={Cadastro_tipopagamento} />
          <RoutesPrivate path='/cadastro-usuario' component={Cadastro_usuario} />
          
          
          <RoutesPrivate path='/consulta-categoria' component={Consulta_categoria} />
          <RoutesPrivate path='/consulta-subcategoria' component={Consulta_subcategoria} />
          <RoutesPrivate path='/consulta-unidadedemedida' component={Consulta_unidadedemedida} />
          <RoutesPrivate path='/consulta-produto' component={Consulta_produto} />
          <RoutesPrivate path='/consulta-pessoafisica' component={Consulta_pessoafisica} />
          <RoutesPrivate path='/consulta-pessoajuridica' component={Consulta_pessoajuridica} />
          <RoutesPrivate path='/consulta-tipopagamento' component={Consulta_tipopagamento} />
          <RoutesPrivate path='/consulta-usuario' component={Consulta_usuario} />
          <RoutesPrivate path='/consulta-operacao' component={Consulta_operacao} />
          <RoutesPrivate path='/consulta-pagamentocompra' component={Consulta_pagamentocompra} />
          <RoutesPrivate path='/consulta-pagamentovenda' component={Consulta_pagamentovenda} />
          
          <RoutesPrivate path='/movimentacao-compra' component={Movimentacao_compra} />
          <RoutesPrivate path='/movimentacao-venda' component={Movimentacao_venda} />
          <RoutesPrivate path='/movimentacao-pagamento' component={Movimentacao_pagamento} />
          <RoutesPrivate path='/movimentacao-teste' component={Movimentacao_teste} />
          <RoutesPrivate path='/sign-up' component={Home} />
        </Switch>
      </StoreProvider>
    </Router>
  )

export default PagesRoot;