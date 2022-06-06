import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function operacaoPDF(vetor){
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
            {text: converter.codOperacao, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.codNotaFiscal, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},     //Colocar nome utilizado no banco de dados
            {text: converter.dataOperacao, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.nomePessoa, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.tipoOperacao, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
      //    {text: converter.codTipoPagamento, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.nomeTipoPagamento, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]}, 
            {text: converter.tipoStatusOperacao, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.quantidadeParcela, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.valorTotal, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
        ] 
    });

    const details = [
        {text: 'Gerado em: ' + d + ' às ' + h + ':' + m + ':' + s, fontSize: 9},
        {text: 'LISTA DE OPERAÇÕES', style: 'subheader', margin: [0,30,10,20], bold: true, border: [false, true, false, true]},
        {
            table:{
                headerRows: 1,
                widths: [40, '*', '*', '*', 50, '*', 40, 40, 40],  //colocar '*' correspondente ao número de campos
                body: [
                    [
                        {text: 'Código', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},          //colocar título correspondentes a cada campo
                        {text: 'Nota Fiscal', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Data da Operação', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Nome', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Operação', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                   //   {text: 'Código', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Tipo de Pagamento', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Status Op', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Qtd. Parcelas', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Total', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
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

    pdfMake.createPdf(docDefinitios).download('consulta-operacao_' + d + '_' + h + m + '.pdf');
}

export default operacaoPDF;