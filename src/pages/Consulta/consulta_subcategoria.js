import Navbar from '../../components/Menu/Navbar';
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';

export default function Consulta_subcategoria() {

    var url = "/subCategoria"

    const [entries, setEntries] = useState({
        data: [
            {
                codSubCategoria: "",
                nomeSubCategoria: "",
                codCategoria: "",
                nomeCategoria: ""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código da Subcategoria", field: "codSubCategoria", editable:false},
            { title: "Nome da Subcategoria", field: "nomeSubCategoria" },
            { title: "Código da Categoria", field: "codCategoria", editable: false},
            { title: "Nome da Categoria", field: "nomeCategoria" }
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
        codSubCategoria: el.codSubCategoria,
        nomeSubCategoria: el.nomeSubCategoria, 
        codCategoria: el.categoria.codCategoria,
        nomeCategoria: el.categoria.nomeCategoria
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
    title="Consulta de Subcategoria"
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
                        codSubCategoria: entries.data[0].codSubCategoria
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
            .delete(url + "/" + oldData.codSubCategoria)
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