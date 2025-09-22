import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header" data-cy="header">
      <div className="header-container" data-cy="header-container">
        <Link to="/" className="header-title" data-cy="header-title">
          Projeto QA Pet
        </Link>
        <nav className="header-nav" data-cy="header-nav">

            <div className="header-auth-links" data-cy="auth-links">
              <Link to="/login" className="header-link" data-cy="login-link">Login</Link>
              <Link to="/register" className="header-link" data-cy="register-link">Registrar</Link>
              <Link to="/dashboard" className="header-link" data-cy="dashboard-link">Dashboard</Link>
              <button onClick={handleLogout} className="header-link" data-cy="logout-link">Deslogar</button>
            </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;