// src/components/Product.tsx
import React from 'react';

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export const Product: React.FC<ProductProps> = ({ image, title, description, price }) => {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
};
