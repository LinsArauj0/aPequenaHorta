import React from 'react';
import { useCartStore } from '../Store/CartStore';
import CartItem from './CartItem'; // Certifique-se de usar a exportação padrão

const Cart: React.FC = () => {
  const { cart, clearCart, totalAmount, setQuantity } = useCartStore(state => ({
    cart: state.cart,
    clearCart: state.clearCart,
    totalAmount: state.totalAmount,
    setQuantity: state.setQuantity
  }));

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      setQuantity(id, quantity);
    }
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
