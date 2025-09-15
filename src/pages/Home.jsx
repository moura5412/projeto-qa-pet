import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo ao Projeto QA Pet!
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Organize as tarefas diárias do seu melhor amigo.
      </p>
      <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition">
        Começar Agora
      </Link>
    </div>
  );
};

export default Home;