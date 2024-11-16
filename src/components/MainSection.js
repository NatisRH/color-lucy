import React from 'react';
import '../styles/header.css'; // Archivo de estilos
import icono from "../assets/ColorLucyImage.png"; // Imagen de ejemplo para el logo

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="text-container">
        <h1>Combinamos el color perfecto para tu vehículo</h1>
        <p>
          Especialistas en igualación de colores para autos y motos. 
          Precisión y calidad garantizada.
        </p>
        <button className="cta-button">Contactar por WhatsApp</button>
      </div>
      <div className="image-container">
        <img src={icono} alt="Imagen de ejemplo" className="main-image" />
      </div>
    </section>
  );
};

export default MainSection;
