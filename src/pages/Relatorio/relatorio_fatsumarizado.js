import Navbar from '../../components/Menu/Navbar';

import React, { useEffect, useState } from "react";
import  api  from '../../components/Services/api';
import  DarkMode  from '../../components/DarkMode';
import produtoPDF from '../../components/Pdf/pdf_produto';
import '../Consulta/consulta.css';

const MaterialTable = React.lazy(() => import('material-table'));

export default function Relatorio_fatsumarizado() {

    var url = "/faturamento/sumarizadoAnual/"

    const [entries, setEntries] = useState({
        data: [
            {
                codigoProduto: "",
                descricaoPeriodo: "",
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
            { title: "Código do Produto", field: "codProduto", editable:false},
            { title: "Período", field: "descricaoPeriodo" },
            { title: "Qtd. Entrada do Estoque", field: "quantidadeItemEstoqueEntrada" },
            { title: "Qtd. Saída do Estoque", field: "quantidadeItemEstoqueSaida" },
            { title: "Valor custo de venda", field: "valorCustoVenda" },
            { title: "Valor faturado", field: "valorFaturado" },
            { title: "Valor líquido", field: "valorLiquido" }
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
     <button onClick={(e) => produtoPDF(entries.data)} className="btnPdf">Gerar PDF</button>
</div>
     
        <MaterialTable
    title="Relatório de Faturamento Sumarizado"
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

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>

    </div>   
    </>

);
}