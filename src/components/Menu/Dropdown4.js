import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const MenuItems = [
  {
    title: 'Fat. Detalhado',
    path: '/relatorio-fatdetalhado-dia',
    cName: 'dropdown-link'
  },
  {
    title: 'Fat. Sumarizado',
    path: '/relatorio-fatsumarizado-mes',
    cName: 'dropdown-link'
  }
];


function Dropdown4() {
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

export default Dropdown4;
