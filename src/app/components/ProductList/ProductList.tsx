import React, { useRef, useState } from 'react';
import ProductCard from '../CartContext/ProductCard'; // Certifique-se de que o caminho está correto
import './product.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Product {
  image: string;
  title: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    price: 10.99,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 2',
    description: 'Descrição do Produto 2',
    price: 19.99,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 3',
    description: 'Descrição do Produto 3',
    price: 29.99,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 4',
    description: 'Descrição do Produto 4',
    price: 39.99,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Produto 5',
    description: 'Descrição do Produto 5',
    price: 49.99,
  },
  // Adicione mais produtos aqui...
];

export const ProductList: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left'
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(carouselRef.current.scrollWidth - carouselRef.current.clientWidth, scrollPosition + scrollAmount);

      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={() => handleScroll('left')}>
        <FaChevronLeft />
      </button>
      <div className="product-container" ref={carouselRef}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button className="nav-button right" onClick={() => handleScroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
};
