import Navbar from '../../components/Menu/Navbar';
import React, { useEffect, useState } from "react";
import api  from '../../components/Services/api';
import fatdetalhadoPDF from '../../components/Pdf/pdf_relatorio_fatdetalhado';
import './relatorio.css';
const MaterialTable = React.lazy(() => import('material-table'));
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Relatorio_fatdetalhado_dia() {

    var url = "/faturamento/detalhadoDiario/"

    const [entries, setEntries] = useState({
        data: [
            {
                codigoProduto: "",
                nomeProduto: "",
                quantidadeItem: "",
                valorPrecoMedio: "",
                descricaoPeriodo: ""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código", field: "codigoProduto", editable:false},
            { title: "Produto", field: "nomeProduto" },
            { title: "Quantidade de itens", field: "quantidadeItem" },
            { title: "Preço médio", field: "valorPrecoMedio" },
            { title: "Período", field: "descricaoPeriodo" }
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
        quantidadeItem: el.quantidadeItem,
        valorPrecoMedio: el.valorPrecoMedio,
        descricaoPeriodo: el.descricaoPeriodo
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
<div className="bodya">

    <div className="button-group-row-left">

    <a href='./relatorio-fatdetalhado-mes'><button id="button-menu">Mês</button></a>

    <a href='./relatorio-fatdetalhado-ano'><button id="button-menu">Ano</button></a>

    </div>

        <MaterialTable
    title="Relatório de Faturamento Detalhado - Diário"
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

<button onClick={(e) => fatdetalhadoPDF(entries.data)} id="button-PDF">Gerar PDF</button>

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>

    </div>   
    </>

);
}