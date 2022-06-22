import Navbar from '../../components/Menu/Navbar';
import React, { useEffect, useState } from "react";
import './consulta.css';
import  api  from '../../components/Services/api';
import pessoajuridicaPDF from '../../components/Pdf/pdf_pessoajuridica';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));
const MaterialTable = React.lazy(() => import('material-table'));

export default function Consulta_pessoajuridica() {

    var url = "/pessoaJuridica"

    const [entries, setEntries] = useState({
        data: [
            {
                codPessoa: "",
                codCNPJ: "",
                nomePessoa: "",
                nomeRazaoSocial:""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: "Código da Pessoa", field: "codPessoa", editable:false},
            { title: "CNPJ", field: "codCNPJ" },
            { title: "Nome Pessoa", field: "nomePessoa" },
            { title: "Nome Razão Social", field: "nomeRazaoSocial" }
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
        codCNPJ: el.codCNPJ,
        nomePessoa: el.nomePessoa,
        nomeRazaoSocial: el.nomeRazaoSocial
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
     <button onClick={(e) => pessoajuridicaPDF(entries.data)} className="btnPdf">Gerar PDF</button>
</div>
    
        <MaterialTable
    title="Consulta de Pessoa Jurídica"
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
                      codPessoa: entries.data[0].codPessoa
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
            .delete(url + "/" + oldData.codPessoa)
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