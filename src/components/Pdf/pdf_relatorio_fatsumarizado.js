import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function fatsumarizadoPDF(vetor){
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
            {text: converter.codigoProduto, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},     //Colocar nome utilizado no banco de dados
            {text: converter.descricaoPeriodo, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.quantidadeItemEstoqueEntrada, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.quantidadeItemEstoqueSaida, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.valorCustoVenda, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.valorFaturado, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
            {text: converter.valorLiquido, fontSize: 9, margin: [0, 2, 0, 2], border: [false, true, false, true]},
        ] 
    });

    const details = [
        {text: 'Gerado em: ' + d + ' às ' + h + ':' + m + ':' + s, fontSize: 9},
        {text: 'RELATÓRIO DE FATURAMENTO SUMARIZADO', style: 'subheader', margin: [0,30,10,20], bold: true, border: [false, true, false, true]},
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*', '*'],                                                //colocar '*' correspondente ao número de campos
                body: [
                    [
                        {text: 'Código do Produto', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},      //colocar título correspondentes a cada campo
                        {text: 'Período', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Qtd. Entrada do Estoque', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Qtd. Saída do Estoque', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Valor custo de venda', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Valor faturado', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
                        {text: 'Valor líquido', style: 'tableHeader', fontSize: 10, bold: true, border: [false, true, false, true]},
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

    pdfMake.createPdf(docDefinitios).download('relatorio-faturamento-sumarizado_' + d + '_' + h + m + '.pdf');
}

export default fatsumarizadoPDF;