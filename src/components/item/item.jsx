import React from "react";
import { useParams } from "react-router-dom";

const ShowData = ({ shopItems }) => {
  const { itemId } = useParams();

  const item = shopItems.find((item) => item.id === itemId);

  if (!item) {
    return <div>No se encontró el item</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.descripcion}</p>
      <p>{item.descripcion}</p>
      <p>Precio: ${item.price}</p>
    
    </div>
  );
};

export default ShowData;
