
import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  const [favorites, setFavorites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const showFavoriteMessage = (isFavorite) => {
    if (isFavorite) {
      setMessage("Añadido a favoritos");
    } else {
      setMessage("Removido de favoritos");
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Ocultar el mensaje después de 2 segundos (ajusta el tiempo según tus preferencias)
  };

  const addToFavorites = (itemId) => {
    if (!favorites.includes(itemId)) {
      setFavorites([...favorites, itemId]);
      showFavoriteMessage(true); // Mostrar el mensaje de "Añadido a favoritos"
    }
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter((id) => id !== itemId));
    showFavoriteMessage(false); // Mostrar el mensaje de "Removido de favoritos"
  };

  return (
    <>
      {shopItems.map((shopItem) => {
        const { id, category, cover, name, descripcion, price } = shopItem;
        const isFavorite = favorites.includes(id);
        

        return (
          <div className="box" key={id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{category}</span>
                <img src={cover} alt="" id="img-shop-card"/>
                <div className="product-like">
                  {/* Agregamos la clase "heart-red" cuando el producto está en la lista de favoritos */}
                  {isFavorite ? (
                    <i
                      className="fa-solid fa-heart heart-red"
                      onClick={() => removeFromFavorites(id)}
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-heart"
                      onClick={() => addToFavorites(id)}
                    ></i>
                  )}
                </div>
              </div>
              <div className="product-details">
                <h3 id="title-cart">{name}</h3>
                <p>{descripcion}</p>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{price}.00 € </h4>
                  <button onClick={() => addToCart(shopItem)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Mostrar el mensaje emergente */}
      {showMessage && <div className="message">{message}</div>}
    </>
  );
};

export default ShopCart;
