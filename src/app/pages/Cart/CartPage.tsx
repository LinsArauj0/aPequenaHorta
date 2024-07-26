import React from 'react';
import { useCart } from '../../components/CartContext/CartContext';
import './cartPage.css';

export const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(index)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};