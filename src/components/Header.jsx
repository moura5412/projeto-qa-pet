import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Projeto QA Pet
        </Link>
        <nav>
          {isAuth ? (
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
          ) : (
            <div className="space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
              <Link to="/register" className="text-gray-600 hover:text-gray-800">Registrar</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;