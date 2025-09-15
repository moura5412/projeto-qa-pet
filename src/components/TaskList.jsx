const TaskList = ({ tasks, onToggleTaskStatus, onDeleteTask, dogId }) => {
  return (
    <ul className="mt-2 space-y-2">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-3 rounded-lg ${task.status === 'completa' ? 'bg-green-100' : 'bg-red-100'}`}
          >
            <div>
              <p className={`font-semibold ${task.status === 'completa' ? 'line-through text-gray-500' : ''}`}>
                {task.name}
              </p>
              {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
              {task.date && task.time && (
                <p className="text-xs text-gray-400">
                  {task.date} às {task.time}
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onToggleTaskStatus(dogId, task.id)}
                className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
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
                className="text-white bg-red-500 p-2 rounded-full hover:bg-red-600 transition"
                title="Excluir Tarefa"
              >
                🗑️
              </button>
            </div>
          </li>
        ))
      ) : (
        <p className="text-center text-gray-500 text-sm">Nenhuma tarefa cadastrada.</p>
      )}
    </ul>
  );
};

export default TaskList;