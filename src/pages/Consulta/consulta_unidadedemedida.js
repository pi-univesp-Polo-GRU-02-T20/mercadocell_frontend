import Navbar from '../../components/Menu/Navbar';
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import './consulta.css';
import axios from "axios";

export default function Consulta_UnidadeMedida() {

    var url = "http://localhost:8080/unidadeMedida/"

    const [entries, setEntries] = useState({
        data: [
            {
                codUnidadeMedida: "",
                nomeUnidadeMedida: "",
                siglaUnidadeMedida: ""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código da Unidade de Medida", field: "codUnidadeMedida", editable:false},
            { title: "Nome da Unidade de Medida", field: "nomeUnidadeMedida" },
            { title: "Sigla da Unidade de Medida", field: "siglaUnidadeMedida" }
        ]
    });

    useEffect(() => {
        axios
        .get("http://localhost:8080/unidadeMedida")
        .then(response => {
        let data = [];
    response.data.forEach(el => {
      data.push(
        {
        codUnidadeMedida: el.codUnidadeMedida,
        nomeUnidadeMedida: el.nomeUnidadeMedida, 
        siglaUnidadeMedida: el.siglaUnidadeMedida
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
    title="Consulta de Unidade de Medida"
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
                .put("http://localhost:8080/unidadeMedida", newData, {
                    params: {
                        codUnidadeMedida: entries.data[0].codUnidadeMedida
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
            .delete(url + oldData.codUnidadeMedida)
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