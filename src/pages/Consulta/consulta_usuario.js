import Navbar from '../../components/Menu/Navbar';
import React, { useEffect, useState } from "react";
import './consulta.css';
import api  from '../../components/Services/api';
import usuarioPDF from '../../components/Pdf/pdf_usuario';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));
const MaterialTable = React.lazy(() => import('material-table'));

export default function Consulta_pessoajuridica() {

    var url = "/usuario"

    const [entries, setEntries] = useState({
        data: [
            {
                codPessoa: "",
                nomePessoa: "",
                codUsuario: "",
                login: "",
                senha:"",
                ativo:""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código da Pessoa", field: "codPessoa", editable:false},
            { title: "Nome da Pessoa", field: "nomePessoa" },
            { title: "Código do Usuário", field: "codUsuario", editable:false },
            { title: "Login", field: "login" },
            { title: "Senha", field: "senha" }
    //      { title: "Ativo", field: "ativo" }
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
        codPessoa: el.codPessoa,
        nomePessoa: el.nomePessoa, 
        codUsuario: el.codUsuario,
        login: el.login,
        senha: el.senha
//      ativo: el.ativo
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
    title="Consulta de Usuário"
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
                      codUsuario: entries.data[0].codUsuario
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
            .delete(url + "/" + oldData.codUsuario)
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

    <button onClick={(e) => usuarioPDF(entries.data)} id="button-PDF">Gerar PDF</button>
    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>
    </div>

    </>
);
}