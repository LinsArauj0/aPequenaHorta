import React, { useState } from 'react';
import './cart.css';

// Tipo para representar um item no carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Tipo para representar as props do componente Cart
interface CartProps {
  items: CartItem[];
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onCheckout }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button
                    onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-price">
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
      <button className="checkout-button" onClick={onCheckout}>Checkout</button>
    </div>
  );
};