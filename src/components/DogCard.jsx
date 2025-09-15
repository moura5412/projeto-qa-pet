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
    <div className="dog-card" data-cy={`dog-card-${dog.id}`}>
      <div className="dog-card-header" data-cy={`dog-card-header-${dog.id}`}>
        <h3 className="dog-card-title" data-cy={`dog-name-${dog.id}`}>{dog.name}</h3>
        <div className="dog-actions-group" data-cy={`dog-actions-group-${dog.id}`}>
          <button
            className="edit-button"
            data-cy={`btn-edit-dog-${dog.id}`}
            onClick={() => onEditDog(dog)}
          >
            Editar
          </button>
          <button
            className="delete-button"
            data-cy={`btn-delete-dog-${dog.id}`}
            onClick={() => onDeleteDog(dog.id)}
          >
            Excluir
          </button>
        </div>
      </div>
      <p className="dog-card-text" data-cy={`dog-age-${dog.id}`}>Idade: {dog.age} anos</p>
      <p className="dog-card-text" data-cy={`dog-breed-${dog.id}`}>Raça: {dog.breed}</p>

      <div className="dog-card-tasks" data-cy={`dog-card-tasks-${dog.id}`}>
        <h4 className="dog-card-tasks-title" data-cy={`dog-card-tasks-title-${dog.id}`}>Tarefas do Dia:</h4>
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
        data-cy={`btn-toggle-task-form-${dog.id}`}
      >
        {showTaskForm ? 'Cancelar' : 'Adicionar Nova Tarefa'}
      </button>

      {showTaskForm && (
        <TaskForm onSubmit={handleTaskSubmit} data-cy={`task-form-add-${dog.id}`} />
      )}
      {editingTask && (
        <TaskForm onSubmit={handleEditTask} initialData={editingTask} data-cy={`task-form-edit-${dog.id}`} />
      )}
    </div>
  );
};

export default DogCard;