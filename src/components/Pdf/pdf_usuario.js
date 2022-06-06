import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function usuarioPDF(vetor){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const d = today.toLocaleDateString();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

    const reportTitle = [
        {
            text: 'MERCADOCELL',                                                    //Colocar título correspondente ao documento
            fontSize: 18,
            bold: true,
            margin: [15, 20, 0, 45] 
        }
    ];

    const dados = vetor.map((converter) => {
        return [
            {text: converter.codPessoa, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},     //Colocar nome utilizado no banco de dados
            {text: converter.nomePessoa, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.codUsuario, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.login, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.senha, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
         // {text: converter.ativo, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
        ] 
    });

    const details = [
        {text: 'Gerado em: ' + d + ' às ' + h + ':' + m + ':' + s, fontSize: 9},
        {text: 'LISTA DE USUÁRIOS', style: 'subheader', margin: [0,30,10,20], bold: true, border: [false, true, false, true]},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*'],                                                //colocar '*' correspondente ao número de campos
                body: [
                    [
                        {text: 'Código de Pessoa', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},      //colocar título correspondentes a cada campo
                        {text: 'Nome', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Código de Usuário', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Login', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Senha', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
            //          {text: 'Status Ativo', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                    ],
                    ...dados
                ]
            },
            layout: {
				fillColor: function (rowIndex) {
					return (rowIndex % 2 === 0) ? '#e3e3e3' : null;
				}
			} 
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

    pdfMake.createPdf(docDefinitios).download('consulta-usuario_' + d + '_' + h + m + '.pdf');
}

export default usuarioPDF;