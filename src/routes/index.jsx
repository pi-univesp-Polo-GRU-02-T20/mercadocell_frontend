import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Private } from './Private';

import { Login } from '../pages/Login/Login';

import { Home } from '../pages/Home/Home';

import Redefinir from '../pages/Login/Redefinir';

const Sobre = React.lazy(() => import('../pages/Home/sobre'));
const Mapa = React.lazy(() => import('../pages/Home/mapa'));
const Recursos = React.lazy(() => import('../pages/Home/recursos'));
const Privacidade = React.lazy(() => import('../pages/Home/privacidade'));

const MenuCadastro = React.lazy(() => import('../pages/Menus/menu_cadastro'));
const MenuConsulta = React.lazy(() => import('../pages/Menus/menu_consulta'));
const MenuOperacao = React.lazy(() => import('../pages/Menus/menu_operacao'));
const MenuRelatorio = React.lazy(() => import('../pages/Menus/menu_relatorio'));

const CadastroCategoria = React.lazy(() => import('../pages/Cadastro/cadastro_categoria'));
const CadastroSubcategoria = React.lazy(() => import('../pages/Cadastro/cadastro_subcategoria'));
const CadastroUnidadedemedida = React.lazy(() => import('../pages/Cadastro/cadastro_unidadedemedida'));
const CadastroProduto = React.lazy(() => import('../pages/Cadastro/cadastro_produto'));
const CadastroPessoafisica = React.lazy(() => import('../pages/Cadastro/cadastro_pessoafisica'));
const CadastroPessoajuridica  = React.lazy(() => import('../pages/Cadastro/cadastro_pessoajuridica'));
const CadastroTipopagamento = React.lazy(() => import('../pages/Cadastro/cadastro_tipopagamento'));
const CadastroUsuario = React.lazy(() => import('../pages/Cadastro/cadastro_usuario'));

const ConsultaCategoria = React.lazy(() => import('../pages/Consulta/consulta_categoria'));
const ConsultaSubcategoria = React.lazy(() => import('../pages/Consulta/consulta_subcategoria'));
const ConsultaUnidadedemedida = React.lazy(() => import('../pages/Consulta/consulta_unidadedemedida'));
const ConsultaProduto = React.lazy(() => import('../pages/Consulta/consulta_produto'));
const ConsultaPessoafisica = React.lazy(() => import('../pages/Consulta/consulta_pessoafisica'));
const ConsultaPessoajuridica = React.lazy(() => import('../pages/Consulta/consulta_pessoajuridica'));
const ConsultaTipopagamento = React.lazy(() => import('../pages/Consulta/consulta_tipopagamento.js'));
const ConsultaUsuario = React.lazy(() => import('../pages/Consulta/consulta_usuario'));
const ConsultaOperacao = React.lazy(() => import('../pages/Consulta/consulta_operacao'));
const ConsultaPagamentocompra = React.lazy(() => import('../pages/Consulta/consulta_pagamentocompra'));
const ConsultaPagamentovenda = React.lazy(() => import('../pages/Consulta/consulta_pagamentovenda'));

const MovimentacaoCompra = React.lazy(() => import('../pages/Movimentacao/movimentacao_compra'));
const MovimentacaoVenda = React.lazy(() => import('../pages/Movimentacao/movimentacao_venda'));
const MovimentacaoPagamento = React.lazy(() => import('../pages/Movimentacao/movimentacao_pagamento'));

const RelatorioFatdetalhadoDia = React.lazy(() => import('../pages/Relatorio/relatorio_fatdetalhado_dia'));
const RelatorioFatdetalhadoMes = React.lazy(() => import('../pages/Relatorio/relatorio_fatdetalhado_mes'));
const RelatorioFatdetalhadoAno = React.lazy(() => import('../pages/Relatorio/relatorio_fatdetalhado_ano'));

const RelatorioFatsumarizadoMes = React.lazy(() => import('../pages/Relatorio/relatorio_fatsumarizado_mes'));
const RelatorioFatsumarizadoDia = React.lazy(() => import('../pages/Relatorio/relatorio_fatsumarizado_dia'));
const RelatorioFatsumarizadoAno = React.lazy(() => import('../pages/Relatorio/relatorio_fatsumarizado_ano'));

const PainelVendas = React.lazy(() => import('../pages/Painel/painel_vendas'));

export const RoutesApp = () => {

return(

<Router>
    <Routes>
          
        <Route path="/" element={ <Login /> } />
        <Route path="/redefinir" element={ <Redefinir /> } />

        <Route path="/home" element={<React.Suspense fallback={<div>Loading...</div>}><Private/><Home /></React.Suspense>} />
        <Route path="/sobre" element={<React.Suspense fallback={<div>Loading...</div>}><Private/><Sobre /></React.Suspense>} />
        <Route path="/mapa" element={<React.Suspense fallback={<div>Loading...</div>}><Private/><Mapa/></React.Suspense>} />
        <Route path="/recursos" element={<React.Suspense fallback={<div>Loading...</div>}><Private/><Recursos/></React.Suspense>} />
        <Route path="/privacidade" element={<React.Suspense fallback={<div>Loading...</div>}><Private/><Privacidade/></React.Suspense>} />

        <Route path='/menu-cadastro' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MenuCadastro/></React.Suspense>} />
        <Route path='/menu-consulta' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MenuConsulta/></React.Suspense>} />
        <Route path='/menu-operacao' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MenuOperacao/></React.Suspense>} />
        <Route path='/menu-relatorio' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MenuRelatorio/></React.Suspense>} />
      
        <Route path="/cadastro-categoria" element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroCategoria/></React.Suspense>} /> 
        <Route path='/cadastro-subcategoria' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroSubcategoria/></React.Suspense>} />
        <Route path='/cadastro-unidadedemedida' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroUnidadedemedida/></React.Suspense>} />
        <Route path='/cadastro-produto' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroProduto/></React.Suspense>} />
        <Route path='/cadastro-pessoafisica' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroPessoafisica/></React.Suspense>} />
        <Route path='/cadastro-pessoajuridica' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroPessoajuridica/></React.Suspense>} />
        <Route path='/cadastro-tipopagamento' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroTipopagamento/></React.Suspense>} />
        <Route path='/cadastro-usuario' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><CadastroUsuario/></React.Suspense>} />
          
        <Route path='/consulta-categoria' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaCategoria/></React.Suspense>} />
        <Route path='/consulta-subcategoria' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaSubcategoria/></React.Suspense>} />
        <Route path='/consulta-unidadedemedida' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaUnidadedemedida/></React.Suspense>} />
        <Route path='/consulta-produto' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaProduto/></React.Suspense>} />
        <Route path='/consulta-pessoafisica' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaPessoafisica/></React.Suspense>} />
        <Route path='/consulta-pessoajuridica' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaPessoajuridica/></React.Suspense>} />
        <Route path='/consulta-tipopagamento' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaTipopagamento/></React.Suspense>} />
        <Route path='/consulta-usuario' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaUsuario/></React.Suspense>} />
        <Route path='/consulta-operacao' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaOperacao/></React.Suspense>} />
        <Route path='/consulta-pagamentocompra' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaPagamentocompra/></React.Suspense>} />
        <Route path='/consulta-pagamentovenda' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><ConsultaPagamentovenda/></React.Suspense>} />
          
        <Route path='/movimentacao-compra' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MovimentacaoCompra/></React.Suspense>} />
        <Route path='/movimentacao-venda' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MovimentacaoVenda/></React.Suspense>} />
        <Route path='/movimentacao-pagamento' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><MovimentacaoPagamento/></React.Suspense>} />

        <Route path='/relatorio-fatdetalhado-dia' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><RelatorioFatdetalhadoDia/></React.Suspense>} />
        <Route path='/relatorio-fatdetalhado-mes' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><RelatorioFatdetalhadoMes/></React.Suspense>} />
        <Route path='/relatorio-fatdetalhado-ano' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><RelatorioFatdetalhadoAno/></React.Suspense>} />

        <Route path='/relatorio-fatsumarizado-mes' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><RelatorioFatsumarizadoMes/></React.Suspense>} />
        <Route path='/relatorio-fatsumarizado-dia' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><RelatorioFatsumarizadoDia/></React.Suspense>} />
        <Route path='/relatorio-fatsumarizado-ano' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><RelatorioFatsumarizadoAno/></React.Suspense>} />

        <Route path='/painel-vendas' element={<React.Suspense fallback={<div>Loading...</div>}><Private/><PainelVendas/></React.Suspense>} />        

    </Routes>
</Router>
  );

};