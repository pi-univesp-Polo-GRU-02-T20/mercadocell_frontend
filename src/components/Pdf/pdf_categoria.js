import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function categoriaPDF(vetor){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Categorias',                                                    //Colocar título correspondente ao documento
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] 
        }
    ];

    const dados = vetor.map((converter) => {
        return [
            {text: converter.codCategoria, fontSize: 9, margin: [0, 2, 0, 2]},     //Colocar nome utilizado no banco de dados
            {text: converter.nomeCategoria, fontSize: 9, margin: [0, 2, 0, 2]},
        ] 
    });


    const details = [
        {
            table:{
                headerRows: 1,
                widths: ['*', '*'],                                                //colocar '*' correspondente ao número de campos
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10},      //colocar título correspondentes a cada campo
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},
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

export default categoriaPDF;