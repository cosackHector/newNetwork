import React from "react";
import s from "./Header.module.css"

const  Header = () => {
  console.log('render header');
    return (
      <header className = {s.header}>
        <a>Типо шапка</a>
      </header>
    );
  };

export default Header;