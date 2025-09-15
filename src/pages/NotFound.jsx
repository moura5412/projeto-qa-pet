import { Link } from 'react-router-dom';

import '../styles/Pages.css';

const NotFound = () => {
  return (
    <div className="not-found-container" data-cy="not-found-container">
      <h1 className="not-found-title" data-cy="not-found-title">404</h1>
      <p className="not-found-text" data-cy="not-found-text">Página não encontrada.</p>
      <Link to="/" className="not-found-link" data-cy="not-found-link">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;