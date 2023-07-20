import React from "react";
import { Modal, Button } from "react-bootstrap";

const FavoritesModal = ({ show, onHide, favorites, data }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Mis Favoritos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {favorites.length === 0 ? (
          <p>No tienes productos en favoritos.</p>
        ) : (
          favorites.map((itemId) => {
            const product = data.find((item) => item.id === itemId);
            if (!product) return null;
            return (
              <div key={product.id}>
                <h5>{product.name}</h5>
                <p>{product.descripcion}</p>
              </div>
            );
          })
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FavoritesModal;

