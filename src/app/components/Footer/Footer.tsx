import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre nós</h4>
          <p>Somos uma equipe de desenvolvedores apaixonados que criam aplicativos web incríveis.</p>
        </div>
        <div className="footer-section">
          <h4>Parceiros</h4>
          <ul>
            <li><a href="#home">SAF</a></li>
            <li><a href="#services">Quitanda</a></li>
            <li><a href="#contact">Governo do Piauí</a></li>
            <li><a href="#about">Nutri Doces</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contate-nos</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 A Pequena Horta. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};