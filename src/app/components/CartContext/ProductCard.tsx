import React from 'react';
import { useCart } from '../../components/CartContext/CartContext';
import './productCard.css';

interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    window.location.href = '/cart'; // Redireciona para a página do carrinho
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
