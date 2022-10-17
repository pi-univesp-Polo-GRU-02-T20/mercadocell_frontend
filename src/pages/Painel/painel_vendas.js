import Navbar from '../../components/Menu/Navbar';
import React from "react";
import '../Consulta/consulta.css';
const DarkMode = React.lazy(() => import('../../components/DarkMode'));

export default function Painel_vendas() {
    

    return (
      <>

<div className="container grid-areas">

<div className="header">

   <DarkMode />
   <Navbar />

</div>

<div className="body-consulta">
    
<iframe title="PROTOTIPO_DASH_MERCADOCELL_LOCAL" 
        width="100%" 
        height="100%" 
        src="https://app.powerbi.com/reportEmbed?reportId=7612e57b-c506-4b04-bbe4-0e2d30fc9a56&autoAuth=true&ctid=dee74457-d751-4011-a5c4-44560cf8b415" 
        frameborder="0" 
        allowFullScreen="true">
</iframe>

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>
    </div>


    </>
);
}