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
    <form onSubmit={handleSubmit} className="dog-form" data-cy="dog-form">
      <h3 data-cy="dog-form-title">{initialData ? 'Editar Cachorro' : 'Cadastrar Cachorro'}</h3>
      <div className="dog-form-group" data-cy="dog-form-group-name">
        <label className="dog-form-label" data-cy="dog-form-label-name">Nome do Cachorro</label>
        <input
          data-cy="dog-form-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="dog-form-input"
          required
        />
      </div>
      <div className="dog-form-group" data-cy="dog-form-group-age">
        <label className="dog-form-label" data-cy="dog-form-label-age">Idade</label>
        <input
          data-cy="dog-form-age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="dog-form-input"
          required
        />
      </div>
      <div className="dog-form-group" data-cy="dog-form-group-breed">
        <label className="dog-form-label" data-cy="dog-form-label-breed">Raça</label>
        <select
          data-cy="dog-form-breed"
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
        data-cy="btn-save-dog"
        type="submit"
        className="dog-form-button"
      >
        {initialData ? 'Salvar Edição' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default DogForm;