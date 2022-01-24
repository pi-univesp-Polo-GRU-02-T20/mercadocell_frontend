import Navbar from '../../components/Menu/Navbar';
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';

export default function Consulta_pagamentovenda() {

    var url = "/pagamentoOperacao?tipoOperacao=V"

    const [entries, setEntries] = useState({
        data: [
            {
                codPagamento: "",
                codOperacao: "",
                codNotaFiscal: "",
                dataPagamento: "",
                dataVencimento:"",
                valorPagamento:""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código do Pagamento", field: "codPagamento", editable:false},
            { title: "Código da Operação", field: "codOperacao" },
            { title: "Código da NF", field: "codNotaFiscal" },
            { title: "Data de Pagamento", field: "dataPagamento" },
            { title: "Data de Vencimento", field: "dataVencimento" },
            { title: "Valor do Pagamento", field: "valorPagamento" }
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
        codPagamento: el.codPagamento,
        codOperacao: el.operacao.codOperacao, 
        codNotaFiscal: el.operacao.codNotaFiscal,
        dataPagamento: el.dataPagamento,
        dataVecimento: el.dataVencimento,
        valorPagamento: el.valorPagamento
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
      <Navbar />
        <MaterialTable
    title="Consulta de Pagamento - Venda"
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
                       codPagamento: entries.data[0].codPagamento
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
            .delete(url + "/" + oldData.codPagamento)
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
        actions: 'Ações'
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
    </>
);
}