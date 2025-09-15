import { useState, useEffect } from 'react';
import DogForm from '../components/DogForm';
import DogCard from '../components/DogCard';

// Simulação de API e estado
const api = {
  getBreeds: async () => [{ attributes: { name: 'Golden Retriever' } }, { attributes: { name: 'Labrador' } }],
};

const Dashboard = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      const data = await api.getBreeds();
      setBreeds(data.map(item => item.attributes.name));
    };
    fetchBreeds();
  }, []);

  const handleAddDog = (newDog) => {
    setDogs([...dogs, { ...newDog, id: Date.now(), tasks: [] }]);
  };

  const handleAddTask = (dogId, newTask) => {
    setDogs(dogs.map(dog =>
      dog.id === dogId ? { ...dog, tasks: [...dog.tasks, { ...newTask, id: Date.now(), status: 'incompleta' }] } : dog
    ));
    setSelectedDog(null);
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard do Pet</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cadastrar Cachorro</h2>
        <DogForm breeds={breeds} onAddDog={handleAddDog} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meus Cachorros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.length > 0 ? (
            dogs.map(dog => (
              <DogCard
                key={dog.id}
                dog={dog}
                onSelect={() => setSelectedDog(dog)}
                onAddTask={handleAddTask}
                onToggleTaskStatus={handleToggleTaskStatus}
                onDeleteTask={handleDeleteTask}
                isSelected={selectedDog?.id === dog.id}
              />
            ))
          ) : (
            <p>Você ainda não cadastrou nenhum cachorro.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;