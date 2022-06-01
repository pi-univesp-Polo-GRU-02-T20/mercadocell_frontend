import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function usuarioPDF(vetor){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Usuários',                                                    //Colocar título correspondente ao documento
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] 
        }
    ];

    const dados = vetor.map((converter) => {
        return [
            {text: converter.codPessoa, fontSize: 9, margin: [0, 2, 0, 2]},     //Colocar nome utilizado no banco de dados
            {text: converter.nomePessoa, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.codUsuario, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.login, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.senha, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.ativo, fontSize: 9, margin: [0, 2, 0, 2]},
        ] 
    });

    const details = [
        {
            table:{
                headerRows: 1,
                widths: ['*', '*','*', '*','*', '*'],                                                //colocar '*' correspondente ao número de campos
                body: [
                    [
                        {text: 'Código de Pessoa', style: 'tableHeader', fontSize: 10},      //colocar título correspondentes a cada campo
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},
                        {text: 'Código de Usuário', style: 'tableHeader', fontSize: 10},
                        {text: 'Login', style: 'tableHeader', fontSize: 10},
                        {text: 'Senha', style: 'tableHeader', fontSize: 10},
                        {text: 'Status Ativo', style: 'tableHeader', fontSize: 10},
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines' 
        }
    ];

    function Rodape(currentPage, pageCount){
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    }

    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitios).download();
}

export default usuarioPDF;