import React from 'react';
import '../styles/header.css'; 
import icono from "../assets/ColorLucyLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={icono} alt="Logo Color Lucy" className="logo" />
      </div>
      <nav className="nav">
        <a href="#services" className="nav-link">Servicios</a>
        <a href="#process" className="nav-link">Proceso</a>
        <a href="#contact" className="nav-link">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
