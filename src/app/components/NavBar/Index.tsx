import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../Store/CartStore';
import CartModal from '../Carrinho/CartModal';
import styles from './NavBar.module.css';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles['navbar-logo']}>
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <div className={`${styles['navbar-links']} ${isOpen ? styles.active : ''}`}>
          <ul>
            <li>
              <Link to="/" className={styles['nav-link']}>Inicio</Link>
            </li>
            <li>
              <Link to="/about" className={styles['nav-link']}>Sobre</Link>
            </li>
            <li>
              <Link to="/product" className={styles['nav-link']}>Produtos</Link>
            </li>
            <li>
              <Link to="/contact" className={styles['nav-link']}>Contato</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-cart']} onClick={handleCartClick}>
          <FaShoppingCart className={styles['cart-icon']} />
          {itemCount > 0 && (
            <div className={styles['cart-count']}>{itemCount}</div>
          )}
        </div>
        <div className={styles['menu-icon']} onClick={toggleMenu}>
          <div className={`${styles['menu-line']} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles['menu-line']} ${isOpen ? styles.open : ''}`}></div>
          <div className={`${styles['menu-line']} ${isOpen ? styles.open : ''}`}></div>
        </div>
      </nav>
      {isCartOpen && <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />}
    </>
  );
};
