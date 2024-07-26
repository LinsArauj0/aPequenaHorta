import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutUs.css';

export const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <img src="https://via.placeholder.com/300" alt="About Us" className="about-us-image" />
        <div className="about-us-info">
          <h2 className="about-us-title">Sobre Nós</h2>
          <p className="about-us-description">
            Nós somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes. Nossa equipe é composta por profissionais qualificados e experientes.
          </p>
          <button className="learn-more-button" onClick={handleLearnMore}>
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
};

