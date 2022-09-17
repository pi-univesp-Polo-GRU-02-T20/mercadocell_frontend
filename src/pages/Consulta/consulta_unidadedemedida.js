import Navbar from '../../components/Menu/Navbar';
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';
import unidadedemedidaPDF from '../../components/Pdf/pdf_unidadedemedida';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));
const MaterialTable = React.lazy(() => import('material-table'));

export default function Consulta_unidadedemedida() {

    var url = "/unidadeMedida"

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
        api
        .get(url)
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
    
    <button onClick={(e) => unidadedemedidaPDF(entries.data)} id="button-PDF">Gerar PDF</button>

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>
    </div>

    </>
);
}
