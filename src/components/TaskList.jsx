import '../styles/TaskList.css';

const TaskList = ({ tasks, onToggleTaskStatus, onDeleteTask, onEditClick, dogId }) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status === 'completa' ? 'task-item-complete' : 'task-item-incomplete'}`}
          >
            <div>
              <p className={`task-name ${task.status === 'completa' ? 'task-name-complete' : ''}`}>
                {task.name}
              </p>
              {task.description && <p className="task-description">{task.description}</p>}
              {task.date && task.time && (
                <p className="task-datetime">
                  {task.date} às {task.time}
                </p>
              )}
            </div>
            <div className="task-actions">
              <button
                onClick={() => onEditClick(task)}
                className="task-button-edit"
                title="Editar Tarefa"
              >
                ✏️
              </button>
              <button
                onClick={() => onToggleTaskStatus(dogId, task.id)}
                className="task-button-toggle"
                title="Marcar como Concluída"
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
              >
                🗑️
              </button>
            </div>
          </li>
        ))
      ) : (
        <p className="no-tasks">Nenhuma tarefa cadastrada.</p>
      )}
    </ul>
  );
};

export default TaskList;