import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { users } from '../services/userData'; // Importa a lista de usuários

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Procura na lista por um usuário que corresponda ao nome de usuário e à senha
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      // Se o usuário for encontrado (ou seja, a verificação passou),
      // salva no localStorage e navega para o dashboard
      localStorage.setItem('user', JSON.stringify({ username }));
      navigate('/dashboard');
    } else {
      // Caso contrário, exibe um alerta de erro e não faz o login
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Usuário</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="form-button"
          >
            Entrar
          </button>
        </form>
        <p className="form-link-text">
          Não tem uma conta? <Link to="/register" className="form-link">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;