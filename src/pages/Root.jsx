import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';

import Login from './Login/Login';

const Home = React.lazy(() => import('./Home/Home'));
const Sobre = React.lazy(() => import('./Home/sobre'));
const Mapa = React.lazy(() => import('./Home/mapa'));

const Cadastro_categoria = React.lazy(() => import('./Cadastro/cadastro_categoria'));
const Cadastro_subcategoria = React.lazy(() => import('./Cadastro/cadastro_subcategoria'));
const Cadastro_unidadedemedida = React.lazy(() => import('./Cadastro/cadastro_unidadedemedida'));
const Cadastro_produto = React.lazy(() => import('./Cadastro/cadastro_produto'));
const Cadastro_pessoafisica = React.lazy(() => import('./Cadastro/cadastro_pessoafisica'));
const Cadastro_pessoajuridica  = React.lazy(() => import('./Cadastro/cadastro_pessoajuridica'));
const Cadastro_tipopagamento = React.lazy(() => import('./Cadastro/cadastro_tipopagamento'));
const Cadastro_usuario = React.lazy(() => import('./Cadastro/cadastro_usuario'));

const Consulta_categoria = React.lazy(() => import('./Consulta/consulta_categoria'));
const Consulta_subcategoria = React.lazy(() => import('./Consulta/consulta_subcategoria'));
const Consulta_unidadedemedida = React.lazy(() => import('./Consulta/consulta_unidadedemedida'));
const Consulta_produto = React.lazy(() => import('./Consulta/consulta_produto'));
const Consulta_pessoafisica = React.lazy(() => import('./Consulta/consulta_pessoafisica'));
const Consulta_pessoajuridica = React.lazy(() => import('./Consulta/consulta_pessoajuridica'));
const Consulta_tipopagamento = React.lazy(() => import('./Consulta/consulta_tipopagamento.js'));
const Consulta_usuario = React.lazy(() => import('./Consulta/consulta_usuario'));
const Consulta_operacao = React.lazy(() => import('./Consulta/consulta_operacao'));
const Consulta_pagamentocompra = React.lazy(() => import('./Consulta/consulta_pagamentocompra'));
const Consulta_pagamentovenda = React.lazy(() => import('./Consulta/consulta_pagamentovenda'));

const Movimentacao_compra = React.lazy(() => import('./Movimentacao/movimentacao_compra'));
const Movimentacao_venda = React.lazy(() => import('./Movimentacao/movimentacao_venda'));
const Movimentacao_pagamento = React.lazy(() => import('./Movimentacao/movimentacao_pagamento'));

const Relatorios = React.lazy(() => import('./Relatorio/relatorios'));

/*
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
*/

const PagesRoot = () => (
    <Router>
      <StoreProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/" exact component={() => <Home/>} />
          <RoutesPrivate path="/sobre" exact component={() => <Sobre/>} />
          <RoutesPrivate path="/mapa" exact component={() => <Mapa/>} />

          <RoutesPrivate path='/cadastro-categoria' component={() => <Cadastro_categoria/>} />
          <RoutesPrivate path='/cadastro-subcategoria' component={() => <Cadastro_subcategoria/>} />
          <RoutesPrivate path='/cadastro-unidadedemedida' component={() => <Cadastro_unidadedemedida/>} />
          <RoutesPrivate path='/cadastro-produto' component={() => <Cadastro_produto/>} />
          <RoutesPrivate path='/cadastro-pessoafisica' component={() => <Cadastro_pessoafisica/>} />
          <RoutesPrivate path='/cadastro-pessoajuridica' component={() => <Cadastro_pessoajuridica/>} />
          <RoutesPrivate path='/cadastro-tipopagamento' component={() => <Cadastro_tipopagamento/>} />
          <RoutesPrivate path='/cadastro-usuario' component={() => <Cadastro_usuario/>} />
          
          
          <RoutesPrivate path='/consulta-categoria' component={() => <Consulta_categoria/>} />
          <RoutesPrivate path='/consulta-subcategoria' component={() => <Consulta_subcategoria/>} />
          <RoutesPrivate path='/consulta-unidadedemedida' component={() => <Consulta_unidadedemedida/>} />
          <RoutesPrivate path='/consulta-produto' component={() => <Consulta_produto/>} />
          <RoutesPrivate path='/consulta-pessoafisica' component={() => <Consulta_pessoafisica/>} />
          <RoutesPrivate path='/consulta-pessoajuridica' component={() => <Consulta_pessoajuridica/>} />
          <RoutesPrivate path='/consulta-tipopagamento' component={() => <Consulta_tipopagamento/>} />
          <RoutesPrivate path='/consulta-usuario' component={() => <Consulta_usuario/>} />
          <RoutesPrivate path='/consulta-operacao' component={() => <Consulta_operacao/>} />
          <RoutesPrivate path='/consulta-pagamentocompra' component={() => <Consulta_pagamentocompra/>} />
          <RoutesPrivate path='/consulta-pagamentovenda' component={() => <Consulta_pagamentovenda/>} />
          
          <RoutesPrivate path='/movimentacao-compra' component={() => <Movimentacao_compra/>} />
          <RoutesPrivate path='/movimentacao-venda' component={() => <Movimentacao_venda/>} />
          <RoutesPrivate path='/movimentacao-pagamento' component={() => <Movimentacao_pagamento/>} />

          <RoutesPrivate path='/relatorios' component={() => <Relatorios/>} />

          <RoutesPrivate path='/sign-up' component={() => <Home/>} />
          
        </Switch>
        </React.Suspense>
      </StoreProvider>
    </Router>
  )

export default PagesRoot;