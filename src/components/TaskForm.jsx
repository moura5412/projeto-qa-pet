import { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, date, time });
    setName('');
    setDescription('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
      <div className="mb-4">
        <label className="block text-gray-700">Nome da Tarefa</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descrição (opcional)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700">Data (opcional)</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Horário (opcional)</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
      >
        Salvar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;