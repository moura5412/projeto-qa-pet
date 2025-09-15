import { useState, useEffect } from 'react';
import DogForm from '../components/DogForm';
import DogCard from '../components/DogCard';
import { getBreeds } from '../services/api';

import '../styles/Dashboard.css';

const Dashboard = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [editingDog, setEditingDog] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      const data = await getBreeds();
      setBreeds(data.map(item => item.attributes.name));
    };
    fetchBreeds();
  }, []);

  const handleAddDog = (newDog) => {
    setDogs([...dogs, { ...newDog, id: Date.now(), tasks: [] }]);
  };

  const handleEditDog = (updatedDog) => {
    setDogs(dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog));
    setEditingDog(null); // Sai do modo de edição
  };

  const handleDeleteDog = (dogId) => {
    if (window.confirm('Tem certeza que deseja excluir este cachorro?')) {
      setDogs(dogs.filter(dog => dog.id !== dogId));
    }
  };

  const handleAddTask = (dogId, newTask) => {
    setDogs(dogs.map(dog =>
      dog.id === dogId ? { ...dog, tasks: [...dog.tasks, { ...newTask, id: Date.now(), status: 'incompleta' }] } : dog
    ));
  };

  const handleEditTask = (dogId, updatedTask) => {
    setDogs(dogs.map(dog =>
      dog.id === dogId
        ? {
            ...dog,
            tasks: dog.tasks.map(task =>
              task.id === updatedTask.id ? updatedTask : task
            ),
          }
        : dog
    ));
  };

  const handleToggleTaskStatus = (dogId, taskId) => {
    setDogs(dogs.map(dog =>
      dog.id === dogId
        ? {
            ...dog,
            tasks: dog.tasks.map(task =>
              task.id === taskId ? { ...task, status: task.status === 'incompleta' ? 'completa' : 'incompleta' } : task
            ),
          }
        : dog
    ));
  };

  const handleDeleteTask = (dogId, taskId) => {
    setDogs(dogs.map(dog =>
      dog.id === dogId ? { ...dog, tasks: dog.tasks.filter(task => task.id !== taskId) } : dog
    ));
  };

  return (
    <div className="dashboard-container" data-cy="dashboard-container">
      <h1 className="dashboard-title" data-cy="dashboard-title">Dashboard do Pet</h1>

      <section className="dashboard-section" data-cy="dashboard-section-form">
        <h2 className="dashboard-section-title" data-cy="dashboard-section-title-form">
          {editingDog ? 'Editar Cachorro' : 'Cadastrar Cachorro'}
        </h2>
        <DogForm
          breeds={breeds}
          onAddDog={handleAddDog}
          onEditDog={handleEditDog}
          initialData={editingDog}
        />
      </section>

      <section className="dashboard-section" data-cy="dashboard-section-list">
        <h2 className="dashboard-section-title" data-cy="dashboard-section-title-list">Meus Cachorros</h2>
        <div className="dog-list-grid" data-cy="dog-list-grid">
          {dogs.length > 0 ? (
            dogs.map(dog => (
              <DogCard
                key={dog.id}
                dog={dog}
                onEditDog={setEditingDog}
                onDeleteDog={handleDeleteDog}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onToggleTaskStatus={handleToggleTaskStatus}
                onDeleteTask={handleDeleteTask}
              />
            ))
          ) : (
            <p data-cy="no-dogs-message">Você ainda não cadastrou nenhum cachorro.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;