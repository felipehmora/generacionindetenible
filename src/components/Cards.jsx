import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types"; // Importar prop-types para validación
import cardsData from "../assets/data.js"; // Importar los datos simulados

// Componente para cada tarjeta
const Card = ({ title, description, imageUrl, onClick }) => (
  <div
    className="bg-white w-full mb-4 p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col md:flex-row items-start md:items-center cursor-pointer"
    onClick={onClick} // Agregar el evento onClick en cada tarjeta
  >
    <div className="flex-shrink-0">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={imageUrl}
        alt={title}
      />
    </div>
    <div>
      <h2 className="text-[#fbae00] font-bold text-xl ml-[20%] mb-[15%]">
        {title}
      </h2>
      <p className="text-gray-600 ml-[20%]">{description}</p>
    </div>
  </div>
);

// Validación de props
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Validar que onClick es requerido y es una función
};

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simula la obtención de datos (puedes agregar un retraso si quieres simular una llamada a una API)
    setCards(cardsData); // Usar los datos simulados importados
  }, []);

  // Función para mostrar la modal cuando se clickea una tarjeta
  const showModal = () => {
    Swal.fire({
      imageUrl: "https://placeholder.pics/svg/300x1500",
      imageHeight: 1500,
      imageAlt: "A tall image",
    });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            onClick={() => showModal()} // Pasar la función onClick para abrir la modal
          />
        ))
      ) : (
        <p>Cargando tarjetas...</p>
      )}
    </div>
  );
};

export default CardList;
