import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { users } from '../services/userData';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const userExists = users.find(user => user.username === username);

    if (userExists) {
      alert('Este nome de usuário já existe. Por favor, escolha outro.');
      return; 
    }

    users.push({ username, password });

    alert('Usuário registrado com sucesso! Por favor, faça o login.');
    navigate('/login');
  };

  return (
    <div className="form-container" data-cy="register-form-container">
      <div className="form-wrapper" data-cy="register-form-wrapper">
        <h1 className="form-title" data-cy="register-form-title">Registrar</h1>
        <form onSubmit={handleRegister} data-cy="register-form">
          <div className="form-group" data-cy="register-form-group-username">
            <label className="form-label" data-cy="register-form-label-username">Novo Usuário</label>
            <input
              data-cy="register-email"
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group" data-cy="register-form-group-password">
            <label className="form-label" data-cy="register-form-label-password">Nova Senha</label>
            <input
              data-cy="register-password"
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            data-cy="btn-register"
            type="submit"
            className="form-button"
          >
            Criar Conta
          </button>
        </form>
        <p className="form-link-text" data-cy="register-form-link-text">
          Já tem uma conta? <Link to="/login" data-cy="link-back-login" className="form-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;