import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useState } from 'react';

import '../styles/DogCard.css';

const DogCard = ({ dog, onAddTask, onToggleTaskStatus, onDeleteTask, onEditDog, onEditTask, onDeleteDog }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleTaskSubmit = (newTask) => {
    onAddTask(dog.id, newTask);
    setShowTaskForm(false);
  };

  const handleEditTask = (updatedTask) => {
    onEditTask(dog.id, updatedTask);
    setEditingTask(null);
  };

  return (
    <div className="dog-card">
      <div className="dog-card-header">
        <h3 className="dog-card-title">{dog.name}</h3>
        <div className="dog-actions-group">
          <button className="edit-button" onClick={() => onEditDog(dog)}>Editar</button>
          <button className="delete-button" onClick={() => onDeleteDog(dog.id)}>Excluir</button>
        </div>
      </div>
      <p className="dog-card-text">Idade: {dog.age} anos</p>
      <p className="dog-card-text">Raça: {dog.breed}</p>

      <div className="dog-card-tasks">
        <h4 className="dog-card-tasks-title">Tarefas do Dia:</h4>
        <TaskList
          tasks={dog.tasks}
          onToggleTaskStatus={onToggleTaskStatus}
          onDeleteTask={onDeleteTask}
          onEditClick={(task) => setEditingTask(task)}
          dogId={dog.id}
        />
      </div>

      <button
        onClick={() => {
          setShowTaskForm(!showTaskForm);
          setEditingTask(null);
        }}
        className="dog-card-button"
      >
        {showTaskForm ? 'Cancelar' : 'Adicionar Nova Tarefa'}
      </button>

      {showTaskForm && (
        <TaskForm onSubmit={handleTaskSubmit} />
      )}
      {editingTask && (
        <TaskForm onSubmit={handleEditTask} initialData={editingTask} />
      )}
    </div>
  );
};

export default DogCard;