import React from "react";
import "../styles/DarkMode.css";
import { Link } from 'react-router-dom';
import  BigMode  from '../components/BigMode';

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <>

    <div className="acessibilidade">

      <ul className="acessibilidade-menu">
    
        <li className="acessibilidade-item">
          <Link to='' className='acessibilidade-links'> ACESSIBILIDADE </Link>
        </li>

        <li className="acessibilidade-item">
          <button className="acessibilidade-btn" onClick={(e) => switchTheme(e)}> ALTO CONTRASTE </button>
        </li>

        <BigMode />

        <li className="acessibilidade-item">
          <Link to='/mapa' className='acessibilidade-links'> MAPA DO SITE </Link>

        </li>
      </ul>

    </div>

    </>
  );
};

export default DarkMode;
