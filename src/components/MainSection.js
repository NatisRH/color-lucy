import React from 'react';
import '../styles/header.css';
import icono from "../assets/ColorLucyImage.png";

const MainSection = () => {
  return (
    <>
      <section className="main-section flex flex-col md:flex-row justify-between items-center p-6">
        <div className="text-container text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Combinamos el color perfecto para tu vehículo</h1>
          <p className="text-gray-600 mb-6">
            Especialistas en igualación de colores para autos y motos.
            Precisión y calidad garantizada.
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Contactar por WhatsApp
          </button>
        </div>
        <div className="image-container mt-6 md:mt-0">
          <img src={icono} alt="Imagen de ejemplo" className="w-full max-w-sm" />
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 text-center">
            Ofrecemos soluciones profesionales para todo tipo de vehículos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg">
              <div className="text-blue-500 text-3xl mb-4">💧</div>
              <h3 className="text-xl font-semibold mb-2">Igualación de Color</h3>
              <p className="text-gray-600 text-center">
                Combinación exacta para cualquier color de vehículo.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg">
              <div className="text-blue-500 text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Pinturas Automotrices</h3>
              <p className="text-gray-600 text-center">
                Amplia gama de productos de alta calidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg">
              <div className="text-blue-500 text-3xl mb-4">⏱</div>
              <h3 className="text-xl font-semibold mb-2">Servicio Rápido</h3>
              <p className="text-gray-600 text-center">
                Entrega el mismo día para la mayoría de los trabajos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proceso Simple */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Proceso Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Trae tu muestra</h3>
              <p className="text-gray-600 text-center">
                Parte del vehículo o código de color.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Igualamos el color</h3>
              <p className="text-gray-600 text-center">
                Proceso sistematizado de alta precisión.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Entrega inmediata</h3>
              <p className="text-gray-600 text-center">
                Listo para aplicar en tu vehículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Clientes Satisfechos */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Clientes Satisfechos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg">
              <div className="text-yellow-500 text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-center">
                "Excelente servicio, el color quedó idéntico al original. Muy profesionales y rápidos."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg">
              <div className="text-yellow-500 text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-center">
                "Excelente servicio, el color quedó idéntico al original. Muy profesionales y rápidos."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg">
              <div className="text-yellow-500 text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-center">
                "Excelente servicio, el color quedó idéntico al original. Muy profesionales y rápidos."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Sección Contáctanos */}
<section className="bg-gray-50 py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Información de Contacto */}
    <div className="text-left p-6">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <p className="text-green-600 mb-2">WhatsApp: +123 456 7890</p>
      <p className="text-gray-600 mb-2">
        <span role="img" aria-label="phone">📞</span> Tel: (123) 456-7890
      </p>
      <p className="text-gray-600">
        <span role="img" aria-label="location">📍</span> Dirección: Calle Principal #123
      </p>
    </div>

    {/* Formulario de Contacto */}
    <div className="p-6 bg-white rounded shadow">
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Teléfono"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</section>
{/* Botón flotante de WhatsApp */}
<a
  href="https://wa.me/3155176725"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-16 right-16 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
  aria-label="Contactar por WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.371 0 0 5.371 0 12c0 2.123.554 4.154 1.61 5.96L0 24l6.287-1.588C8.037 23.447 10.014 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm.02 22.222c-1.795 0-3.552-.483-5.099-1.395l-.365-.214-3.737.943.793-3.447-.24-.374C2.788 15.962 2.32 14.002 2.32 12c0-5.347 4.337-9.684 9.68-9.684 5.35 0 9.687 4.337 9.687 9.684-.001 5.349-4.338 9.685-9.687 9.685zm4.471-7.012c-.248-.124-1.471-.725-1.699-.804-.228-.08-.395-.124-.562.124-.168.249-.646.803-.792.973-.146.168-.291.187-.539.063-.248-.125-1.047-.384-1.995-1.222-.737-.63-1.234-1.407-1.381-1.655-.145-.249-.016-.384.109-.507.111-.11.248-.291.372-.437.125-.146.166-.248.248-.414.08-.168.04-.312-.02-.437-.062-.124-.562-1.355-.771-1.855-.204-.491-.408-.425-.562-.425-.145-.008-.312-.01-.48-.01-.165 0-.436.062-.663.291-.228.228-.87.849-.87 2.074 0 1.226.892 2.414 1.017 2.579.124.166 1.754 2.674 4.262 3.75.596.257 1.062.411 1.426.525.599.191 1.144.165 1.575.101.48-.07 1.471-.599 1.678-1.176.208-.576.208-1.073.146-1.176-.063-.103-.228-.165-.476-.29z" />
  </svg>
</a>



    </>
  );
};

export default MainSection;
