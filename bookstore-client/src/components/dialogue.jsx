import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

function StaticExample({ onHide }) {
  const { clearCart } = useShoppingCart();
  const navigate = useNavigate();

  const handleOKClick = () => {
    clearCart(); // Clear the cart
    onHide(); // Close the modal
    navigate('/')
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Checkout successful! Thank you for your order.</p>
      </Modal.Body>

      <Modal.Footer>
        
        <Button variant="primary" className="bg-gray-700" onClick={handleOKClick}>
          OK
        </Button>
      </Modal.Footer>
    </>
  );
}

export default StaticExample;
