import { Link } from 'react-router-dom';

import '../styles/Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Bem-vindo ao Projeto QA Pet!
      </h1>
      <p className="home-subtitle">
        Organize as tarefas diárias do seu melhor amigo.
      </p>
      <Link to="/login" className="home-button">
        Começar Agora
      </Link>
    </div>
  );
};

export default Home;