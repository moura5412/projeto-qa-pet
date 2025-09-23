import { useState, useEffect } from 'react';

const useDogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const storedDogs = localStorage.getItem('dogs');
    if (storedDogs) {
      setDogs(JSON.parse(storedDogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dogs', JSON.stringify(dogs));
  }, [dogs]);

  const addDog = (newDog) => {
    setDogs((prevDogs) => [...prevDogs, { ...newDog, id: Date.now(), tasks: [] }]);
  };

  const updateDog = (updatedDog) => {
    setDogs((prevDogs) => prevDogs.map((dog) => (dog.id === updatedDog.id ? updatedDog : dog)));
  };

  const deleteDog = (dogId) => {
    setDogs((prevDogs) => prevDogs.filter((dog) => dog.id !== dogId));
  };

  return { dogs, addDog, updateDog, deleteDog, setDogs };
};

export default useDogs;