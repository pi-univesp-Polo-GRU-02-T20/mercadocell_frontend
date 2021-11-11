import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const MenuItems1 = [
  {
    title: 'Categoria',
    path: '/cadastro-categoria',
    cName: 'dropdown-link'
  },
  {
    title: 'Subcategoria',
    path: '/cadastro-subcategoria',
    cName: 'dropdown-link'
  },
  {
    title: 'Unidade de Medida',
    path: '/cadastro-unidadedemedida',
    cName: 'dropdown-link'
  },
  {
    title: 'Produto',
    path: '/cadastro-produto',
    cName: 'dropdown-link'
  },
  {
    title: 'Pessoa Física',
    path: '/cadastro-pessoafisica',
    cName: 'dropdown-link'
  },
  {
    title: 'Pessoa Jurídica',
    path: '/cadastro-pessoajuridica',
    cName: 'dropdown-link'
  },
  {
    title: 'Usuário',
    path: '/cadastro-usuario',
    cName: 'dropdown-link'
  }
];


function Dropdown1() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems1.map((item, index) => {
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

export default Dropdown1;
