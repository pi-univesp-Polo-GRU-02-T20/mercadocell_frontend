import React, {useContext} from 'react';
import StoreContext from '../../components/Store/Context';
import '../../App.css';
import Navbar from '../../components/Menu/Navbar';
import { Link } from 'react-router-dom';


export default function Home() {
  
  const { setToken } = useContext(StoreContext);
 
  return (
  <>
  <Navbar />
  
  <div className="fundo_pagina">
  <div className="bemVindo">
      <h1>Bem-vindo</h1>
  </div>

  <div className="btnSobre">
      <Link to='./sobre' className='linkSobre'>
       Sobre
      </Link>
      </div>

  <br/>
  </div>
  </>
  );
}