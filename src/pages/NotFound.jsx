import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Página não encontrada.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;