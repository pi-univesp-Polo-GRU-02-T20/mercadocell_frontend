import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    }
    else{
      setDropdown1(true);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    }
    else{
      setDropdown2(true);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    }
    else{
      setDropdown3(true);
    }
  };

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    }
    else{
      setDropdown4(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } 
    if (window.innerWidth < 960) {
      setDropdown2(false);
    }
    if (window.innerWidth < 960) {
      setDropdown3(false);
    }
    if (window.innerWidth < 960) {
      setDropdown4(false);
    }
    else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Mercadocell
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave}>
            <Link to='/menu-cadastro' className='nav-links' onClick={closeMobileMenu}>
              Cadastro <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/menu-consulta' className='nav-links' onClick={closeMobileMenu}>
              Consulta <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className='nav-item'
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave}
              >
            <Link to='/menu-operacao' className='nav-links' onClick={closeMobileMenu}>
              Operação <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
          <li className='nav-item'
              onMouseEnter={onMouseEnter4}
              onMouseLeave={onMouseLeave}
              >
            <Link to='/menu-relatorio' className='nav-links' onClick={closeMobileMenu}>
              Relatórios<i className='fas fa-caret-down' />
            </Link>
            {dropdown4 && <Dropdown4 />}
          </li>




          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sair
            </Link>
          </li>











     
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;