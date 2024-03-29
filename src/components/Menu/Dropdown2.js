import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const MenuItems = [
  {
    title: 'Categoria',
    path: '/consulta-categoria',
    cName: 'dropdown-link'
  },
  {
    title: 'Subcategoria',
    path: '/consulta-subcategoria',
    cName: 'dropdown-link'
  },
  {
    title: 'Unidade Medida',
    path: '/consulta-unidadedemedida',
    cName: 'dropdown-link'
  },
  {
    title: 'Produto',
    path: '/consulta-produto',
    cName: 'dropdown-link'
  },
  {
    title: 'Pessoa Física',
    path: '/consulta-pessoafisica',
    cName: 'dropdown-link'
  },
  {
    title: 'Pessoa Jurídica',
    path: '/consulta-pessoajuridica',
    cName: 'dropdown-link'
  },
  {
    title: 'Tipo Pagamento',
    path: '/consulta-tipopagamento',
    cName: 'dropdown-link'
  },
  {
    title: 'Op. Compra Venda',
    path: '/consulta-operacao',
    cName: 'dropdown-link'
  },
  {
    title: 'Pgto. Compra',
    path: '/consulta-pagamentocompra',
    cName: 'dropdown-link'
  },
  {
    title: 'Pgto. Venda',
    path: '/consulta-pagamentovenda',
    cName: 'dropdown-link'
  }
];


function Dropdown2() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown2;
