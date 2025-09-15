import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isAuth }) => {
  return (
    <header className="header" data-cy="header">
      <div className="header-container" data-cy="header-container">
        <Link to="/" className="header-title" data-cy="header-title">
          Projeto QA Pet
        </Link>
        <nav className="header-nav" data-cy="header-nav">
          {isAuth ? (
            <Link to="/dashboard" className="header-link" data-cy="dashboard-link">Dashboard</Link>
          ) : (
            <div className="header-auth-links" data-cy="auth-links">
              <Link to="/login" className="header-link" data-cy="login-link">Login</Link>
              <Link to="/register" className="header-link" data-cy="register-link">Registrar</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;