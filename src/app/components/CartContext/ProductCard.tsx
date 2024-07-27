import React from 'react';
import { useCartStore } from '../Store/CartStore';
import productCardStyles from './Product.module.css';

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = React.useState<number>(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className={productCardStyles.card}>
      <img src={product.image} alt={product.name} className={productCardStyles.image} />
      <div className={productCardStyles.details}>
        <h3 className={productCardStyles.name}>{product.name}</h3>
        <p className={productCardStyles.description}>{product.description}</p>
        <p className={productCardStyles.price}>R$ {product.price.toFixed(2)}</p>
        <div className={productCardStyles.quantityWrapper}>
          <button
            className={productCardStyles.quantityButton}
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            className={productCardStyles.quantityInput}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            className={productCardStyles.quantityButton}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button className={productCardStyles.addButton} onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
