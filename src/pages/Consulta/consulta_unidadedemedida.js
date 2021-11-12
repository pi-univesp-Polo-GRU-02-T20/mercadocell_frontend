import Navbar from '../../components/Menu/Navbar';
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';

export default function Consulta_unidadedemedida() {

    var url = "/UnidadeMedida"

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
            { title: "Nome", field: "nomeUnidadeMedida" },
            { title: "Descrição", field: "descricaoUnidadeMedida" }
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
        codUnidadeMedida: el.codUnidadeMedida,
        nomeUnidadeMedida: el.nomeUnidadeMedida, 
        descricaoUnidadeMedida: el.descricaoUnidadeMedida
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
            api
                .put(url, newData, {
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
            api
            .delete(url + "/" + oldData.codUnidadeMedida)
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