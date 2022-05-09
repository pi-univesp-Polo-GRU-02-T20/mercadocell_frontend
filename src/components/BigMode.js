import React from "react";
import "../styles/DarkMode.css";

const BigMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const normalSize = "normal";
  const bigSize = "big";
  let size;

  if (localStorage) {
    size = localStorage.getItem("size");
  }

  if (size === normalSize || size === bigSize) {
    body.classList.add(size);
  } else {
    body.classList.add(normalSize);
  }

  const switchSize = (e) => {
    if (size === bigSize) {
      body.classList.replace(bigSize, normalSize);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("size", "normal");
      size = normalSize;
    } else {
      body.classList.replace(normalSize, bigSize);
      e.target.classList.add(clickedClass);
      localStorage.setItem("size", "big");
      size = bigSize;
    }
  };

  return (
    <>

        <li className="acessibilidade-item">
          <button className="acessibilidade-btn" onClick={(e) => switchSize(e)}> +/- </button>
        </li>

    </>
  );
};

export default BigMode;
