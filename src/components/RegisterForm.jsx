import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Usuário registrado com sucesso! Por favor, faça o login.');
      navigate('/login');
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Registrar</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label className="form-label">Novo Usuário</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Nova Senha</label>
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
            Criar Conta
          </button>
        </form>
        <p className="form-link-text">
          Já tem uma conta? <Link to="/login" className="form-link">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;