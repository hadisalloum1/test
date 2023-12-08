import React, { useEffect, useState } from "react";
import { Button, Offcanvas, Stack, Modal } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { CartItem } from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import StaticExample from "./dialogue"; // Import the StaticExample component
import { Link } from 'react-router-dom';

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const [storeItems, setStoreItems] = useState([]);
  const [showModal, setShowModal] = useState(false); // State variable for modal visibility

  useEffect(() => {
    // Fetch data from http://localhost:5000/all-books
    fetch("http://localhost:5000/all-books")
      .then((response) => response.json())
      .then((data) => setStoreItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to show the modal
  const handleProceedToCheckout = () => {
    closeCart();
    //setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{ marginTop: "80px" }}>
      <Offcanvas.Header>
        <Offcanvas.Title style={{ fontSize: "1.5rem" }}>Shopping Cart</Offcanvas.Title>
        <Button
          onClick={closeCart}
          className="rounded-circle"
          style={{ width: "1.rem", height: "1.rem", position: "relative" }}
          variant="danger"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-x" viewBox="0 0 16 16">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} storeItems={storeItems} />
            ))}
            <hr />
            <div className="ms-auto fw-bold fs-5">
              Total{" $"}
              {cartItems.reduce(
                (total, cartItem) => {
                  const storeItem = storeItems.find((i) => i._id === cartItem.id);
                  return total + (storeItem?.price || 0) * cartItem.quantity;
                },
                0
              )}
            </div>
          </Stack>
        ) : (
          <p>Your cart is empty.</p>
        )}
        {cartItems.length > 0 && (
          <Link to="/checkout" className='block mt-8'>
          <Button
            variant="outline-success"
            className="w-100"
            onClick={handleProceedToCheckout} // Call the function to show the modal
          >
            Proceed To Checkout
          </Button>
          </Link>
        )}

        {/* Modal for the checkout */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <StaticExample onHide={handleCloseModal} />
        </Modal>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
