import Navbar from '../../components/Menu/Navbar';
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';
import operacaoPDF from '../../components/Pdf/pdf_operacao';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));
const MaterialTable = React.lazy(() => import('material-table'));

export default function Consulta_operacao() {

    var url = "/operacao"

    const [entries, setEntries] = useState({
        data: [
            {
                codNotaFiscal: "",
                codOperacao: "",
                dataOperacao: "",
                pago: "",
                nomePessoa: "",
                tipoOperacao: "",
                nomeTipoPagamento: "",
                tipoStatusOperacao: "",
                quantidadeParcela: "",
                valorTotal:""
            }
        ]
    });

    const [state] = React.useState({
        columns: [

            { title: "Código da Operacão", field: "codOperacao", editable:false },
            { title: "Código da NF", field: "codNotaFiscal" },
            { title: "Data da Operação", field: "dataOperacao" },
            { title: "Nome", field: "nomePessoa" },
            { title: "Tipo de Operação", field: "tipoOperacao" },
            { title: "Tipo de Pagamento", field: "nomeTipoPagamento" },
            { title: "Status Op", field: "tipoStatusOperacao" },
            { title: "Qtd. Parcelas", field: "quantidadeParcela" },
            { title: "Total", field: "valorTotal" }
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
            
        codNotaFiscal: el.codNotaFiscal,
        codOperacao: el.codOperacao,
        dataOperacao: el.dataOperacao,
        pago: el.pago,
        codPessoa: el.pessoa.codPessoa,
        nomePessoa: el.pessoa.nomePessoa,
        tipoOperacao: el.tipoOperacao,
        codTipoPagamento: el.tipoPagamento.codTipoPagamento,
        nomeTipoPagamento: el.tipoPagamento.nomeTipoPagamento,
        tipoStatusOperacao: el.tipoStatusOperacao,
        quantidadeParcela: el.quantidadeParcela,
        valorTotal: el.valorTotal
    
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
<div className="body-consulta">
   
        <MaterialTable
    style={{maxWidth:'100%', alignSelf:'center'}} 
    title="Consulta de Operação"
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
                        codOperacao: entries.data[0].codOperacao
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
            .delete(url + "/" + oldData.codOperacao)
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

    <button onClick={(e) => operacaoPDF(entries.data)} id="button-PDF">Gerar PDF</button>

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>
    </div>

    </>
);
}