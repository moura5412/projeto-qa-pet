import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// Simulação de hook de autenticação
const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuth = !!localStorage.getItem('user');

  return { user, login, logout, isAuth };
};

// Componente para rotas protegidas
const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
};

function App() {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Header isAuth={isAuth} />
      <main className="container mx-auto p-4" data-cy="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;