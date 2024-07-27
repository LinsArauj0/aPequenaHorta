import React from 'react';
import { useCartStore } from '../../components/Store/CartStore'; // Certifique-se de que o caminho está correto
import CartItem from '../../components/Carrinho/CartItem';
import './CartPage.module.css';

const CartPage: React.FC = () => {
  const { cart, setQuantity, removeFromCart, totalAmount, clearCart } = useCartStore(state => ({
    cart: state.cart,
    setQuantity: state.setQuantity,
    removeFromCart: state.removeFromCart,
    totalAmount: state.totalAmount,
    clearCart: state.clearCart
  }));

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantity(id, quantity);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="cartPage">
      {cart.length > 0 ? (
        <>
          <div className="cartItems">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="cartFooter">
            <p>Total Amount: R${totalAmount.toFixed(2)}</p>
            <button className="finalizeButton" onClick={() => {
              // TODO: Implement WhatsApp functionality
              clearCart();
            }}>
              Finalizar
            </button>
            <button onClick={clearCart}>Limpar Carrinho</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
