import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useState } from 'react';

const DogCard = ({ dog, onAddTask, onToggleTaskStatus, onDeleteTask }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleTaskSubmit = (newTask) => {
    onAddTask(dog.id, newTask);
    setShowTaskForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
      <h3 className="text-xl font-bold mb-2">{dog.name}</h3>
      <p className="text-gray-600">Idade: {dog.age} anos</p>
      <p className="text-gray-600">Raça: {dog.breed}</p>

      <div className="mt-4">
        <h4 className="font-semibold">Tarefas do Dia:</h4>
        <TaskList
          tasks={dog.tasks}
          onToggleTaskStatus={onToggleTaskStatus}
          onDeleteTask={onDeleteTask}
          dogId={dog.id}
        />
      </div>

      <button
        onClick={() => setShowTaskForm(!showTaskForm)}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        {showTaskForm ? 'Cancelar' : 'Adicionar Nova Tarefa'}
      </button>

      {showTaskForm && (
        <TaskForm onSubmit={handleTaskSubmit} />
      )}
    </div>
  );
};

export default DogCard;