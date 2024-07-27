import React from 'react';
import { CartItem as CartItemType } from '../../components/Store/CartStore';
import './CartItem.module.css'; // Importe o CSS para estilização

type Props = {
  item: CartItemType;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, onQuantityChange, onRemove }) => {
  const handleIncrease = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cartItem">
      <img src={item.image} alt={item.name} />
      <div className="cartItemDetails">
        <h3>{item.name}</h3>
        <p>R${item.price.toFixed(2)}</p>
        <div className="cartItemQuantity">
          <button onClick={handleDecrease}>-</button>
          <input
            type="number"
            value={item.quantity}
            readOnly
          />
          <button onClick={handleIncrease}>+</button>
          <button className="removeButton" onClick={handleRemove}>Remover</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
