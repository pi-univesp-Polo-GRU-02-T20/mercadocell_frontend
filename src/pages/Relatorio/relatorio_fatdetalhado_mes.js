import Navbar from '../../components/Menu/Navbar';

import React, { useEffect, useState } from "react";
import api  from '../../components/Services/api';

import fatdetalhadoPDF from '../../components/Pdf/pdf_relatorio_fatdetalhado';
import { Link } from 'react-router-dom';

import './relatorio.css';
const MaterialTable = React.lazy(() => import('material-table'));
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Relatorio_fatdetalhado_mes() {

    var url = "/faturamento/detalhadoMensal/"

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

    <Link id='a' to='./relatorio-fatdetalhado-dia'><button id="button-menu">Dia</button></Link>

    <Link id='a' to='./relatorio-fatdetalhado-ano'><button id="button-menu">Ano</button></Link>

    </div>
     
        <MaterialTable
    title="Relatório de Faturamento Detalhado - Mensal"
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