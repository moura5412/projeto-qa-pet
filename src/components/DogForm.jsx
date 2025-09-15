import { useState } from 'react';

const DogForm = ({ breeds, onAddDog }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && selectedBreed) {
      onAddDog({ name, age, breed: selectedBreed });
      setName('');
      setAge('');
      setSelectedBreed('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-inner">
      <div className="mb-4">
        <label className="block text-gray-700">Nome do Cachorro</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Idade</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Raça</label>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        >
          <option value="">Selecione uma raça</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default DogForm;