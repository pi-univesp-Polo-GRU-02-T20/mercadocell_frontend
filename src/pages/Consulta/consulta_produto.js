import Navbar from '../../components/Menu/Navbar';
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import './consulta.css';
import axios from "axios";

export default function Consulta_UnidadeMedida() {

    var url = "http://localhost:8080/produto/"

    const [entries, setEntries] = useState({
        data: [
            {
                codProduto: "",
                nomeProduto: "",
                descricaoProduto: ""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código do Produto", field: "codProduto", editable:false},
            { title: "Nome", field: "nomeProduto" },
            { title: "Descrição", field: "descricaoProduto" }
        ]
    });

    useEffect(() => {
        axios
        .get("http://localhost:8080/produto")
        .then(response => {
        let data = [];
    response.data.forEach(el => {
      data.push(
        {
        codProduto: el.codProduto,
        nomeProduto: el.nomeProduto, 
        descricaoProduto: el.descricaoProduto
        }
    );
});
    setEntries({ data: data });
})
.catch(function(error) {
        console.log(error);
    });
}, []);

    return (
      <>
      <Navbar />
        <MaterialTable
    title="Consulta de Produto"
    data={entries.data}
    columns={state.columns}
    editable={{
        onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve();
            const data = [...entries.data];
            data[data.indexOf(oldData)] = newData;
            axios
                .put("http://localhost:8080/produto", newData, {
                    params: {
                      codProduto: entries.data[0].codProduto
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
            axios
            .delete(url + oldData.codProduto)
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