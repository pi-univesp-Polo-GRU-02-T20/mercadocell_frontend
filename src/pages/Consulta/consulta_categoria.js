import Navbar from '../../components/Menu/Navbar';
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';
import  DarkMode  from '../../components/DarkMode';

export default function Consulta_categoria() {

    var url = "/categoria"
    var fundo
    var fundo2
    const lightTheme = "light";
    fundo = "blue"
    fundo2 = "pink"

    let theme;

    if (localStorage) {
      theme = localStorage.getItem("theme");
    }
  
    

    const [entries, setEntries] = useState({
        data: [
            {
                codCategoria: "",
                nomeCategoria: ""
            }
        ]
    });













    const [estilo, setEstilo] = useState({
        data: 
            {
              backgroundColor: fundo,
            }
    });


    













    
    const [state] = React.useState({
        columns: [
            { title: "Código da categoria", field: "codCategoria", editable:false},
            { title: "Nome da categoria", field: "nomeCategoria" },
        ],
    });

   

    


    useEffect(() => {
        api
        .get(url)
        .then(response => {
        let data = [];
    response.data.forEach(el => {
        data.push(
        {
        codCategoria: el.codCategoria,
        nomeCategoria: el.nomeCategoria
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

<div class="container grid-areas">

<div className="header">

   <DarkMode />
   <Navbar />

</div>

<div className="body">

    <MaterialTable    
    title="Consulta de Categoria"
    data={entries.data}
    style={estilo.data}
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
                        codCategoria: entries.data[0].codCategoria
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
            .delete(url + "/" + oldData.codCategoria)
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