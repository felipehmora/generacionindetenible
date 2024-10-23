import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar prop-types para validación
import cardsData from "../assets/data.js"; // Importar los datos simulados

const Card = ({ title, description, imageUrl }) => (
  <div class="bg-white w-full mb-4 p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col md:flex-row items-start md:items-center">
    <div class="flex-shrink-0">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={imageUrl}
        alt={title}
      />
    </div>
    <div>
      <h2 class="text-[#fbae00] font-bold text-xl ml-[20%] mb-[15%]">
        {title}
      </h2>
      <p class="text-gray-600 ml-[20%]">{description}</p>
    </div>
  </div>
);

// Validación de props
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simula la obtención de datos (puedes agregar un retraso si quieres simular una llamada a una API)
    setCards(cardsData); // Usar los datos simulados importados
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))
      ) : (
        <p>Cargando tarjetas...</p>
      )}
    </div>
  );
};

export default CardList;
