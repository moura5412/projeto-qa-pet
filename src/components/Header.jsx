import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isAuth }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-title">
          Projeto QA Pet
        </Link>
        <nav className="header-nav">
          {isAuth ? (
            <Link to="/dashboard" className="header-link">Dashboard</Link>
          ) : (
            <div className="header-auth-links">
              <Link to="/login" className="header-link">Login</Link>
              <Link to="/register" className="header-link">Registrar</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;