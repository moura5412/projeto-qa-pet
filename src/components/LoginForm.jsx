import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { users } from '../services/userData'; // Importa a lista de usuários

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/dashboard');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="form-container" data-cy="login-form-container">
      <div className="form-wrapper" data-cy="login-form-wrapper">
        <h1 className="form-title" data-cy="login-form-title">Login</h1>
        <form onSubmit={handleLogin} data-cy="login-form">
          <div className="form-group" data-cy="login-form-group-username">
            <label className="form-label" data-cy="login-form-label-username">Usuário</label>
            <input
              data-cy="login-email"
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group" data-cy="login-form-group-password">
            <label className="form-label" data-cy="login-form-label-password">Senha</label>
            <input
              data-cy="login-password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            data-cy="btn-login"
            type="submit"
            className="form-button"
          >
            Entrar
          </button>
        </form>
        <p className="form-link-text" data-cy="login-form-link-text">
          Não tem uma conta? <Link to="/register" data-cy="link-register" className="form-link">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;