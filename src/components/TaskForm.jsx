import { useState, useEffect } from 'react';

import '../styles/TaskForm.css';

const TaskForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [time, setTime] = useState(initialData?.time || '');

  // Use useEffect para atualizar o estado quando `initialData` mudar.
  // Isso é crucial para que o formulário "reaja" quando o usuário clica em editar
  // e o `editingTask` no DogCard é atualizado.
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setDate(initialData.date);
      setTime(initialData.time);
    } else {
      // Limpar o formulário se não houver dados iniciais
      setName('');
      setDescription('');
      setDate('');
      setTime('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      // Se estamos editando, envie a tarefa com o ID original
      onSubmit({
        ...initialData, // Garanta que o ID e o status original sejam mantidos
        name,
        description,
        date,
        time
      });
    } else {
      // Se estamos adicionando uma nova tarefa
      onSubmit({ name, description, date, time });
    }
    // Limpar os campos do formulário após o envio
    setName('');
    setDescription('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h3>{initialData ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h3>
      <div className="task-form-group">
        <label className="task-form-label">Nome da Tarefa</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="task-form-input"
          required
        />
      </div>
      <div className="task-form-group">
        <label className="task-form-label">Descrição (opcional)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-form-textarea"
        ></textarea>
      </div>
      <div className="task-form-group-inline">
        <div className="task-form-group">
          <label className="task-form-label">Data (opcional)</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="task-form-input"
          />
        </div>
        <div className="task-form-group">
          <label className="task-form-label">Horário (opcional)</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="task-form-input"
          />
        </div>
      </div>
      <button
        type="submit"
        className="task-form-button"
      >
        {initialData ? 'Salvar Edição' : 'Salvar Tarefa'}
      </button>
    </form>
  );
};

export default TaskForm;