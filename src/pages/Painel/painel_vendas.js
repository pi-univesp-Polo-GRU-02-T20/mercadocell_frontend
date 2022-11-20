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
        src="https://datastudio.google.com/embed/reporting/2afe5ca9-fd3a-47a6-8f06-fd4dde998370/page/63e3C"  
        frameborder="0" 
        allowfullscreen="true" >
        
</iframe>

    </div>

    <div className="footer">
      <p>Projeto Integrador 2021 - 2022</p>
    </div>
    </div>


    </>
);
}