// src/app/components/Carrinho/CartModal.tsx
import React from 'react';
import { useCartStore, CartItem } from '../Store/CartStore'; // Certifique-se de que o tipo CartItem esteja aqui
import styles from './CartModal.module.css';

// Função para calcular o total
const calculateTotalAmount = (cart: CartItem[], discount: number, shipping: number) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return subtotal - discount + shipping;
};

// Função para gerar a mensagem do WhatsApp
const generateWhatsAppMessage = (cart: CartItem[], totalAmount: number, discount: number, paymentMethod: string): string => {
  const itemsList = cart
    .map(item => `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`)
    .join('\n');

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalAmount = totalAmount.toFixed(2);
  const discountAmount = discount.toFixed(2);
  const shippingAmount = (totalAmount - subtotal + discount).toFixed(2); // Adjust according to your shipping logic

  const message = `Olá! Gostaria de fazer o pedido a seguir:\n\n` +
                  `Itens:\n${itemsList}\n\n` +
                  `Subtotal: R$ ${subtotal.toFixed(2)}\n` +
                  `Desconto: R$ ${discountAmount}\n` +
                  `Frete: R$ ${shippingAmount}\n` +
                  `Total: R$ ${finalAmount}\n\n` +
                  `Forma de pagamento: ${paymentMethod}\n\n` +
                  `Por favor, confirme o pedido.`;

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
};




const CartModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.setQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const discount = useCartStore((state) => state.discount);
  const paymentMethod = useCartStore((state) => state.paymentMethod);
  const setPaymentMethod = useCartStore((state) => state.setPaymentMethod);

  const totalAmount = calculateTotalAmount(cart, discount, 0); // Assuming shipping is handled elsewhere

  const handleFinalize = () => {
    const messageUrl = generateWhatsAppMessage(cart, totalAmount, discount, paymentMethod);
    window.open(messageUrl, '_blank');
    clearCart();
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className={`${styles.cartModal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.cartHeader}>
        <h2>Carrinho</h2>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className={styles.cartContent}>
        {cart.length === 0 ? (
          <p>O carrinho está vazio</p>
        ) : (
          cart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cartItemDetails}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>R$ {item.price.toFixed(2)} x {item.quantity}</p>
                <div className={styles.cartItemQuantity}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input type="number" value={item.quantity} readOnly />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className={styles.removeButton} onClick={() => useCartStore.getState().removeFromCart(item.id)}>Remover</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalAmount}>
          Total: R$ {totalAmount.toFixed(2)}
        </div>
        <div>
          <label htmlFor="paymentMethod">Forma de Pagamento:</label>
          <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentChange}>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Pix">Pix</option>
          </select>
        </div>
        <button className={styles.finalizeButton} onClick={handleFinalize}>Finalizar</button>
      </div>
    </div>
  );
};

export default CartModal;
