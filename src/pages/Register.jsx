import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      alert('Usuário registrado com sucesso! Por favor, faça o login.');
      // Em um projeto real, você enviaria esses dados para um backend
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Registrar</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Novo Usuário</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Nova Senha</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Criar Conta
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Já tem uma conta? <Link to="/login" className="text-purple-500 hover:underline">Faça login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;