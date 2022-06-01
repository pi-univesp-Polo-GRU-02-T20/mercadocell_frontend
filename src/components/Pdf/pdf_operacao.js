import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function operacaoPDF(vetor){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Operações de compra e venda',                                                    //Colocar título correspondente ao documento
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45] 
        }
    ];

    const dados = vetor.map((converter) => {
        return [
            {text: converter.codOperacao, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.codNotaFiscal, fontSize: 9, margin: [0, 2, 0, 2]},     //Colocar nome utilizado no banco de dados
            {text: converter.dataOperacao, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.nomePessoa, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.tipoOperacao, fontSize: 9, margin: [0, 2, 0, 2]},
      //    {text: converter.codTipoPagamento, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.nomeTipoPagamento, fontSize: 9, margin: [0, 2, 0, 2]}, 
            {text: converter.tipoStatusOperacao, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.quantidadeParcela, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: converter.valorTotal, fontSize: 9, margin: [0, 2, 0, 2]},
        ] 
    });

    const details = [
        {
            table:{
                headerRows: 1,
                widths: [40, '*', '*', '*', 50, '*', 40, 40, 40],  //colocar '*' correspondente ao número de campos
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10},          //colocar título correspondentes a cada campo
                        {text: 'Nota Fiscal', style: 'tableHeader', fontSize: 10},
                        {text: 'Data da Operação', style: 'tableHeader', fontSize: 10},
                        {text: 'Nome', style: 'tableHeader', fontSize: 10},
                        {text: 'Operação', style: 'tableHeader', fontSize: 10},
                   //   {text: 'Código', style: 'tableHeader', fontSize: 10},
                        {text: 'Tipo de Pagamento', style: 'tableHeader', fontSize: 10},
                        {text: 'Status Op', style: 'tableHeader', fontSize: 10},
                        {text: 'Qtd. Parcelas', style: 'tableHeader', fontSize: 10},
                        {text: 'Total', style: 'tableHeader', fontSize: 10},
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

export default operacaoPDF;