
// export default ShopCart
import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  // Creamos un estado que almacene el contador de cantidad para cada producto
  const [counts, setCounts] = useState({});

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1, // Si el contador no existe, inicializarlo en 0 y luego incrementar en 1
    }));
  };

  return (
    <>
      {shopItems.map((shopItem) => {
        const { id, discount, cover, name, price } = shopItem;
        const count = counts[id] || 0; // Obtenemos el contador de cantidad específico para este producto

        return (
          <div className="box" key={id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{discount}% Off</span>
                <img src={cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={() => increment(id)}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${price}.00 </h4>
                  <button onClick={() => addToCart(shopItem)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
