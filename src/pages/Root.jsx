import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';

import Rlogin from './Login/Login';

const Home = React.lazy(() => import('./Home/Home'));
const Sobre = React.lazy(() => import('./Home/sobre'));
const Mapa = React.lazy(() => import('./Home/mapa'));

const CadastroCategoria = React.lazy(() => import('./Cadastro/cadastro_categoria'));
const CadastroSubcategoria = React.lazy(() => import('./Cadastro/cadastro_subcategoria'));
const CadastroUnidadedemedida = React.lazy(() => import('./Cadastro/cadastro_unidadedemedida'));
const CadastroProduto = React.lazy(() => import('./Cadastro/cadastro_produto'));
const CadastroPessoafisica = React.lazy(() => import('./Cadastro/cadastro_pessoafisica'));
const CadastroPessoajuridica  = React.lazy(() => import('./Cadastro/cadastro_pessoajuridica'));
const CadastroTipopagamento = React.lazy(() => import('./Cadastro/cadastro_tipopagamento'));
const CadastroUsuario = React.lazy(() => import('./Cadastro/cadastro_usuario'));

const ConsultaCategoria = React.lazy(() => import('./Consulta/consulta_categoria'));
const ConsultaSubcategoria = React.lazy(() => import('./Consulta/consulta_subcategoria'));
const ConsultaUnidadedemedida = React.lazy(() => import('./Consulta/consulta_unidadedemedida'));
const ConsultaProduto = React.lazy(() => import('./Consulta/consulta_produto'));
const ConsultaPessoafisica = React.lazy(() => import('./Consulta/consulta_pessoafisica'));
const ConsultaPessoajuridica = React.lazy(() => import('./Consulta/consulta_pessoajuridica'));
const ConsultaTipopagamento = React.lazy(() => import('./Consulta/consulta_tipopagamento.js'));
const ConsultaUsuario = React.lazy(() => import('./Consulta/consulta_usuario'));
const ConsultaOperacao = React.lazy(() => import('./Consulta/consulta_operacao'));
const ConsultaPagamentocompra = React.lazy(() => import('./Consulta/consulta_pagamentocompra'));
const ConsultaPagamentovenda = React.lazy(() => import('./Consulta/consulta_pagamentovenda'));

const MovimentacaoCompra = React.lazy(() => import('./Movimentacao/movimentacao_compra'));
const MovimentacaoVenda = React.lazy(() => import('./Movimentacao/movimentacao_venda'));
const MovimentacaoPagamento = React.lazy(() => import('./Movimentacao/movimentacao_pagamento'));

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
        <Switch>

          <Route path="/login" exact component={Rlogin} />
          <React.Suspense fallback={<div>Loading...</div>}>
          
          <RoutesPrivate path="/" exact component={() => <Home/>} />
          <RoutesPrivate path="/sobre" exact component={() => <Sobre/>} />
          <RoutesPrivate path="/mapa" exact component={() => <Mapa/>} />

          <RoutesPrivate path='/cadastro-categoria' component={() => <CadastroCategoria/>} />
          <RoutesPrivate path='/cadastro-subcategoria' component={() => <CadastroSubcategoria/>} />
          <RoutesPrivate path='/cadastro-unidadedemedida' component={() => <CadastroUnidadedemedida/>} />
          <RoutesPrivate path='/cadastro-produto' component={() => <CadastroProduto/>} />
          <RoutesPrivate path='/cadastro-pessoafisica' component={() => <CadastroPessoafisica/>} />
          <RoutesPrivate path='/cadastro-pessoajuridica' component={() => <CadastroPessoajuridica/>} />
          <RoutesPrivate path='/cadastro-tipopagamento' component={() => <CadastroTipopagamento/>} />
          <RoutesPrivate path='/cadastro-usuario' component={() => <CadastroUsuario/>} />
          
          
          <RoutesPrivate path='/consulta-categoria' component={() => <ConsultaCategoria/>} />
          <RoutesPrivate path='/consulta-subcategoria' component={() => <ConsultaSubcategoria/>} />
          <RoutesPrivate path='/consulta-unidadedemedida' component={() => <ConsultaUnidadedemedida/>} />
          <RoutesPrivate path='/consulta-produto' component={() => <ConsultaProduto/>} />
          <RoutesPrivate path='/consulta-pessoafisica' component={() => <ConsultaPessoafisica/>} />
          <RoutesPrivate path='/consulta-pessoajuridica' component={() => <ConsultaPessoajuridica/>} />
          <RoutesPrivate path='/consulta-tipopagamento' component={() => <ConsultaTipopagamento/>} />
          <RoutesPrivate path='/consulta-usuario' component={() => <ConsultaUsuario/>} />
          <RoutesPrivate path='/consulta-operacao' component={() => <ConsultaOperacao/>} />
          <RoutesPrivate path='/consulta-pagamentocompra' component={() => <ConsultaPagamentocompra/>} />
          <RoutesPrivate path='/consulta-pagamentovenda' component={() => <ConsultaPagamentovenda/>} />
          
          <RoutesPrivate path='/movimentacao-compra' component={() => <MovimentacaoCompra/>} />
          <RoutesPrivate path='/movimentacao-venda' component={() => <MovimentacaoVenda/>} />
          <RoutesPrivate path='/movimentacao-pagamento' component={() => <MovimentacaoPagamento/>} />

          <RoutesPrivate path='/relatorios' component={() => <Relatorios/>} />

          <RoutesPrivate path='/sign-up' component={() => <Home/>} />

          </React.Suspense>
          
        </Switch>
        
      </StoreProvider>
    </Router>
  )

export default PagesRoot;