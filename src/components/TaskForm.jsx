import { useState, useEffect } from 'react';

import '../styles/TaskForm.css';

const TaskForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [date, setDate] = useState(initialData?.date || '');
  const [time, setTime] = useState(initialData?.time || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setDate(initialData.date);
      setTime(initialData.time);
    } else {
      setName('');
      setDescription('');
      setDate('');
      setTime('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      onSubmit({
        ...initialData,
        name,
        description,
        date,
        time
      });
    } else {
      onSubmit({ name, description, date, time });
    }
    setName('');
    setDescription('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form" data-cy="task-form">
      <h3 data-cy="task-form-title">{initialData ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h3>
      <div className="task-form-group" data-cy="task-form-group-name">
        <label className="task-form-label" data-cy="task-form-label-name">Nome da Tarefa</label>
        <input
          data-cy="task-form-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="task-form-input"
          required
        />
      </div>
      <div className="task-form-group" data-cy="task-form-group-description">
        <label className="task-form-label" data-cy="task-form-label-description">Descrição (opcional)</label>
        <textarea
          data-cy="task-form-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-form-textarea"
        ></textarea>
      </div>
      <div className="task-form-group-inline" data-cy="task-form-group-inline">
        <div className="task-form-group" data-cy="task-form-group-date">
          <label className="task-form-label" data-cy="task-form-label-date">Data (opcional)</label>
          <input
            data-cy="task-form-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="task-form-input"
          />
        </div>
        <div className="task-form-group" data-cy="task-form-group-hour">
          <label className="task-form-label" data-cy="task-form-label-hour">Horário (opcional)</label>
          <input
            data-cy="task-form-hour"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="task-form-input"
          />
        </div>
      </div>
      <button
        data-cy="btn-save-task"
        type="submit"
        className="task-form-button"
      >
        {initialData ? 'Salvar Edição' : 'Salvar Tarefa'}
      </button>
    </form>
  );
};

export default TaskForm;