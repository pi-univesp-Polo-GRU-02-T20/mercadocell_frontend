import React, { useEffect, useState } from "react";
import Navbar from '../../components/Menu/Navbar';
import  DarkMode  from '../../components/DarkMode';
import categoriaPDF from '../../components/Pdf/pdf_categoria';
import './relatorios.css';
import relatorioEstoquePDF from '../../components/Pdf/pdf_relatorio_estoque';
import api  from '../../components/Services/api';

export default function Relatorios() {

    var url = "/produto"

    const [entries, setEntries] = useState({
        data: [
            {
                codProduto: "",
                nomeProduto: "",
                descricaoProduto: "",
                quantidadeEstoqueAtual: "",
                quantidadeEstoqueMaximo: "",
                quantidadeEstoqueMinima: ""
            }
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
        codProduto: el.codProduto,
        nomeProduto: el.nomeProduto, 
        quantidadeEstoqueAtual: el.quantidadeEstoqueAtual,
        quantidadeEstoqueMaximo: el.quantidadeEstoqueMaximo,
        quantidadeEstoqueMinima: el.quantidadeEstoqueMinima,
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
    
  <div className="relatorios_titulo">
      <h1>Relatórios</h1>
  </div>

  <div className="linha">

  <div className="divBtn1">
     <button onClick={(e) => relatorioEstoquePDF(entries.data)} className="btnPdf">Relatório de Estoque</button>
  </div>

  <div className="divBtn1">
     <button onClick={(e) => categoriaPDF()} className="btnPdf">Relatório de Vendas</button>
  </div>

  <div className="divBtn1">
     <button onClick={(e) => categoriaPDF()} className="btnPdf">Relatório de Evolução</button>
  </div>

  </div>

  </div>
  <div className="footer">
    <p>Projeto Integrador 2021 - 2022</p>
  </div>
  </div>
  </>
  );
}