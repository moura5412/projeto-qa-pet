import { useState, useEffect } from 'react';

import '../styles/DogForm.css';

const DogForm = ({ breeds, onAddDog, onEditDog, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [age, setAge] = useState(initialData?.age || '');
  const [selectedBreed, setSelectedBreed] = useState(initialData?.breed || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setAge(initialData.age);
      setSelectedBreed(initialData.breed);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && selectedBreed) {
      if (initialData) {
        onEditDog({ ...initialData, name, age, breed: selectedBreed });
      } else {
        onAddDog({ name, age, breed: selectedBreed });
      }
      setName('');
      setAge('');
      setSelectedBreed('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dog-form">
      <h3>{initialData ? 'Editar Cachorro' : 'Cadastrar Cachorro'}</h3>
      <div className="dog-form-group">
        <label className="dog-form-label">Nome do Cachorro</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="dog-form-input"
          required
        />
      </div>
      <div className="dog-form-group">
        <label className="dog-form-label">Idade</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="dog-form-input"
          required
        />
      </div>
      <div className="dog-form-group">
        <label className="dog-form-label">Raça</label>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          className="dog-form-select"
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
        className="dog-form-button"
      >
        {initialData ? 'Salvar Edição' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default DogForm;