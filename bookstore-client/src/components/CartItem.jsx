import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

export function CartItem({ item, storeItems }) {
  const { removeFromCart } = useShoppingCart();
  const storeItem = storeItems.find((i) => i._id === item.id);

  if (storeItem == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={storeItem.imageURL}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={storeItem.bookTitle}
      />

      <div className="me-auto">
        <div>
          {storeItem.bookTitle}{" "}
          {item.quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" "}
              x{item.quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${storeItem.price}
        </div>
      </div>
      <div>${storeItem.price * item.quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(storeItem._id)}
      >
        &times;
      </Button>
    </Stack>
    
  );
  
}
