import Navbar from '../../components/Menu/Navbar';

import React, { useEffect, useState } from "react";
import api  from '../../components/Services/api';
import DarkMode  from '../../components/DarkMode';
import fatsumarizadoPDF from '../../components/Pdf/pdf_relatorio_fatsumarizado';
import '../Consulta/consulta.css';
import { Link } from 'react-router-dom';

const MaterialTable = React.lazy(() => import('material-table'));

export default function Relatorio_fatsumarizado_ano() {

    var url = "/faturamento/sumarizadoAnual/"

    const [entries, setEntries] = useState({
        data: [
            {
                codigoProduto: "",
                descricaoPeriodo: "",
                nomeProduto: "",
                quantidadeItemEstoqueEntrada: "",
                quantidadeItemEstoqueSaida: "",
                valorCustoVenda: "",
                valorFaturado: "",
                valorLiquido: ""
                
            }
        ]
    });

    const [state] = React.useState({
        columns: [
          { title: "Código", field: "codigoProduto", cellStyle: {maxWidth: 200, fontSize:14}, editable:false},
          { title: "Produto", field: "nomeProduto", cellStyle: {maxWidth: 200, fontSize:14} },
          { title: "Período", field: "descricaoPeriodo", cellStyle: {maxWidth: 200, fontSize:14} },
          { title: "Qtd. Entrada Estoque", field: "quantidadeItemEstoqueEntrada", cellStyle: {maxWidth: 200, fontSize:14}  },
          { title: "Qtd. Saída Estoque", field: "quantidadeItemEstoqueSaida", cellStyle: {maxWidth: 200, fontSize:14} },
          { title: "Valor custo venda", field: "valorCustoVenda", cellStyle: {maxWidth: 200, fontSize:14}  },
          { title: "Valor faturado", field: "valorFaturado", cellStyle: {maxWidth: 200, fontSize:14} },
          { title: "Valor líquido", field: "valorLiquido", cellStyle: {maxWidth: 200, fontSize:14} }
        ]
    });

    useEffect(() => {
        api
        .get(url)
        .then(response => {
        let data = [];
    response.data.forEach(el => {
      data.push(
        {
        codigoProduto: el.codigoProduto,
        nomeProduto: el.nomeProduto,
        descricaoPeriodo: el.descricaoPeriodo,
        quantidadeItemEstoqueEntrada: el.quantidadeItemEstoqueEntrada,
        quantidadeItemEstoqueSaida: el.quantidadeItemEstoqueSaida,
        valorCustoVenda: el.valorCustoVenda,
        valorFaturado: el.valorFaturado,
        valorLiquido: el.valorLiquido
        }
    );
});
    setEntries({ data: data });
})
.catch(function(error) {
        console.log(error);
    });
}, [url]);

    return (
      <>

<div className="container grid-areas">

<div className="header">

    <DarkMode />
    <Navbar />

</div>
<div className="body">

<div className="divBtn">
     <button onClick={(e) => fatsumarizadoPDF(entries.data)} className="btnPdf">Gerar PDF</button>
</div>

<Link to='./relatorio-fatsumarizado-dia' >
<div className="divBtn22">
     <button className="btnPdf">Dia</button>
</div>
</Link>

<Link to='./relatorio-fatsumarizado-mes' >
<div className="divBtn33">
     <button className="btnPdf">Mês</button>
</div>
</Link>
     
        <MaterialTable
    title="Relatório de Faturamento Sumarizado - Anual"
    data={entries.data}
    columns={state.columns}
    editable={{
        onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve();
            const data = [...entries.data];
            data[data.indexOf(oldData)] = newData;
            api
                .put(url, newData, {
                    params: {
                      codigoProduto: entries.data[0].codigoProduto
                    }
                })
                .then(res => console.log(res.data));
            setEntries({ ...entries, data });
        }, 600);
    }),
        onRowDelete: oldData =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve();
            const data = [...entries.data];
            data.splice(data.indexOf(oldData), 1);
            api
            .delete(url + "/" + oldData.codigoProduto)
                .then(res => console.log(res.data));
            setEntries({ ...entries, data });
        }, 600);
    })
    }}
    localization={{
      body: {
        emptyDataSourceMessage: 'Nenhum registro para exibir',
        addTooltip: "Adicionar",
        deleteTooltip: "Deletar",
        editTooltip: "Editar",
        editRow: {
          saveTooltip: "Salvar",
          cancelTooltip: "Cancelar",
          deleteText: "Tem certeza que deseja deletar este registro?"
        },
      },
      header: {
        actions: ''
      },
      toolbar: {
        searchTooltip: 'Pesquisar',
        searchPlaceholder: 'Pesquisar'
      },
      pagination: {
        labelRowsSelect: 'linhas',
        labelDisplayedRows: '{count} de {from}-{to}',
        firstTooltip: 'Primeira página',
        previousTooltip: 'Página anterior',
        nextTooltip: 'Próxima página',
        lastTooltip: 'Última página'
      }
    }}
    />

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>

    </div>   
    </>

);
}