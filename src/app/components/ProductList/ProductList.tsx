import React, { useState, useRef, useEffect } from 'react';
import Product from '../CartContext/ProductCard';
import productListStyles from './ProductList.module.css';
import carouselStyles from './Carousel.module.css';
import { Product as ProductType } from '../Store/CartStore';

const ProductList: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  // Lista de produtos (ajuste conforme necessário)
  const products: ProductType[] = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 3",
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 4",
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 5",
    },
    {
      id: 6,
      name: "Product 6",
      price: 69.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 6",
    },
    {
      id: 7,
      name: "Product 7",
      price: 69.99,
      image: "https://via.placeholder.com/150",
      description: "Descrição do Produto 7",
    },
    // Adicione mais produtos conforme necessário
  ];

  const itemWidth = 220; // Largura do item + margin

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.clientWidth;
      setMaxScroll(Math.max(totalWidth - visibleWidth, 0));
    }
  }, [products]);

  const scrollLeft = () => {
    setScrollX((prev) => Math.min(prev + itemWidth, 0));
  };

  const scrollRight = () => {
    setScrollX((prev) => Math.max(prev - itemWidth, -maxScroll));
  };

  return (
    <div className={productListStyles.productListContainer}>
      <button className={`${carouselStyles.carouselButton} ${carouselStyles.carouselButtonLeft}`} onClick={scrollLeft}>
        &lt;
      </button>
      <div className={carouselStyles.carouselWrapper} style={{ transform: `translateX(${scrollX}px)` }} ref={carouselRef}>
        <div className={productListStyles.productList}>
          {products.map((product) => (
            <div className={productListStyles.carouselItem} key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
      <button className={`${carouselStyles.carouselButton} ${carouselStyles.carouselButtonRight}`} onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default ProductList;
