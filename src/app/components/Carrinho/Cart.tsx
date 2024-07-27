import React from 'react';
import { useCartStore, CartItem as CartItemType } from '../Store/CartStore';
import CartItem from './CartItem'; // Certifique-se de usar a exportação padrão

const Cart: React.FC = () => {
  const { cart, clearCart, totalAmount, setQuantity, removeFromCart } = useCartStore(state => ({
    cart: state.cart,
    clearCart: state.clearCart,
    totalAmount: state.totalAmount,
    setQuantity: state.setQuantity,
    removeFromCart: state.removeFromCart
  }));

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      setQuantity(id, quantity);
    }
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="cart">
      <div className="cartHeader">
        <h2>Seu Carrinho</h2>
        <button onClick={clearCart}>Limpar Carrinho</button>
      </div>
      <div className="cartContent">
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
              onRemove={() => handleRemove(item.id)} // Corrigido para chamar a função `handleRemove`
            />
          ))
        )}
      </div>
      <div className="cartFooter">
        <div className="totalAmount">Total: ${totalAmount.toFixed(2)}</div>
        <button className="finalizeButton">Finalizar</button>
      </div>
    </div>
  );
};

export default Cart;
