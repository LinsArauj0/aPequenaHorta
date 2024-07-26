import React from 'react';
import './aboutUs.css';

export const About: React.FC = () => {
  return (
    <div className="about-us-page-container">
      <header className="about-us-header">
        <h1>Sobre Nós</h1>
      </header>
      <section className="about-introduction">
        <h2>Quem Somos</h2>
        <p>
          Somos uma equipe apaixonada por tecnologia e inovação. Nossa missão é criar soluções 
          que transformem o mercado e ofereçam a melhor experiência aos nossos clientes.
        </p>
      </section>
      <section className="about-history">
        <h2>Nossa História</h2>
        <p>
          Fundada em 2020, nossa empresa começou com a visão de simplificar processos e trazer 
          inovação para o mercado. Desde então, crescemos e expandimos nossa presença globalmente, 
          sempre com o compromisso de oferecer produtos e serviços de alta qualidade.
        </p>
      </section>
      <section className="about-team">
        <h2>Nossa Equipe</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Membro da equipe 1" />
          <div className="team-member-info">
            <h3>João Silva</h3>
            <p>CEO e Fundador</p>
            <p>João é o visionário por trás da empresa, com mais de 10 anos de experiência no setor.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Membro da equipe 2" />
          <div className="team-member-info">
            <h3>Maria Oliveira</h3>
            <p>Diretora de Tecnologia</p>
            <p>Maria lidera a equipe de desenvolvimento e é responsável pela inovação tecnológica da empresa.</p>
          </div>
        </div>
        {/* Adicione mais membros da equipe conforme necessário */}
      </section>
      <section className="about-values">
        <h2>Valores e Missão</h2>
        <p><strong>Missão:</strong> Fornecer soluções tecnológicas inovadoras e confiáveis.</p>
        <p><strong>Visão:</strong> Ser a empresa líder em inovação tecnológica no mercado.</p>
        <p><strong>Valores:</strong> Integridade, Inovação, Excelência e Comprometimento.</p>
      </section>
    </div>
  );
};
