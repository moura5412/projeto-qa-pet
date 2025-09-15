import '../styles/TaskList.css';

const TaskList = ({ tasks, onToggleTaskStatus, onDeleteTask, onEditClick, dogId }) => {
  return (
    <ul className="task-list" data-cy={`task-list-dog-${dogId}`}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li
            data-cy={`task-item-${task.id}`}
            key={task.id}
            className={`task-item ${task.status === 'completa' ? 'task-item-complete' : 'task-item-incomplete'}`}
          >
            <div data-cy={`task-info-${task.id}`}>
              <p
                className={`task-name ${task.status === 'completa' ? 'task-name-complete' : ''}`}
                data-cy={`task-name-${task.id}`}
              >
                {task.name}
              </p>
              {task.description && (
                <p className="task-description" data-cy={`task-description-${task.id}`}>
                  {task.description}
                </p>
              )}
              {task.date && task.time && (
                <p className="task-datetime" data-cy={`task-datetime-${task.id}`}>
                  {task.date} às {task.time}
                </p>
              )}
            </div>
            <div className="task-actions" data-cy={`task-actions-${task.id}`}>
              <button
                onClick={() => onEditClick(task)}
                className="task-button-edit"
                title="Editar Tarefa"
                data-cy={`task-edit-btn-${task.id}`}
              >
                ✏️
              </button>
              <button
                onClick={() => onToggleTaskStatus(dogId, task.id)}
                className="task-button-toggle"
                title="Marcar como Concluída"
                data-cy={`task-toggle-btn-${task.id}`}
              >
                {task.status === 'completa' ? '✓' : '✗'}
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Tem certeza que quer excluir esta tarefa?')) {
                    onDeleteTask(dogId, task.id);
                  }
                }}
                className="task-button-delete"
                title="Excluir Tarefa"
                data-cy={`task-delete-btn-${task.id}`}
              >
                🗑️
              </button>
            </div>
          </li>
        ))
      ) : (
        <p className="no-tasks" data-cy="no-tasks">Nenhuma tarefa cadastrada.</p>
      )}
    </ul>
  );
};

export default TaskList;