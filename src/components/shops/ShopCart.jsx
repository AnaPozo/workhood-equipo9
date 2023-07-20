
<<<<<<< HEAD
// // export default ShopCart;
// import React, { useState } from "react";

// const ShopCart = ({ shopItems, addToCart }) => {
//   const [favorites, setFavorites] = useState([]);

//   const showFavoriteMessage = (isFavorite) => {
//     if (isFavorite) {
//       alert("Añadido a favoritos");
//     } else {
//       alert("Removido de favoritos");
//     }
//   };
  
=======
>>>>>>> 67a528b0f1e3a674885536aca12db3b56332153e

//   const addToFavorites = (itemId) => {
//     if (!favorites.includes(itemId)) {
//       setFavorites([...favorites, itemId]);
//       showFavoriteMessage(true);
//     }
//   };

//   const removeFromFavorites = (itemId) => {
//     setFavorites(favorites.filter((id) => id !== itemId));
//     showFavoriteMessage(false);
//   };

//   return (
//     <>
//       {shopItems.map((shopItem) => {
//         const { id, discount, cover, name, price } = shopItem;
//         const isFavorite = favorites.includes(id);
//         const count = isFavorite ? 1 : 0;

//         return (
//           <div className="box" key={id}>
//             <div className="product mtop">
//               <div className="img">
//                 <span className="discount">{discount}% Off</span>
//                 <img src={cover} alt="" />
//                 <div className="product-like">
//                   <label>{count}</label> <br />
//                   {isFavorite ? (
//                     <i className="fa-solid fa-heart heart-red" onClick={() => removeFromFavorites(id)}></i>
//                   ) : (
//                     <i className="fa-regular fa-heart" onClick={() => addToFavorites(id)}></i>
//                   )}
//                 </div>
//               </div>
//               <div className="product-details">
//                 <h3>{name}</h3>
//                 <div className="rate">
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                   <i className="fa fa-star"></i>
//                 </div>
//                 <div className="price">
//                   <h4>${price}.00 </h4>
//                   <button onClick={() => addToCart(shopItem)}>
//                     <i className="fa fa-plus"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default ShopCart;
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
        const { id, discount, cover, name, price } = shopItem;
        const isFavorite = favorites.includes(id);
        

        return (
<<<<<<< HEAD
          <div className="box" key={id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{discount}% Off</span>
                <img src={cover} alt="" />
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
=======
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.category}</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <p>{shopItems.descripcion}</p>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
>>>>>>> 67a528b0f1e3a674885536aca12db3b56332153e
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
