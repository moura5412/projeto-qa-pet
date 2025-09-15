const useTasks = (dogs, setDogs) => {
  const addTask = (dogId, newTask) => {
    const updatedDogs = dogs.map(dog =>
      dog.id === dogId
        ? { ...dog, tasks: [...dog.tasks, { ...newTask, id: Date.now(), status: 'incompleta' }] }
        : dog
    );
    setDogs(updatedDogs);
  };

  const toggleTaskStatus = (dogId, taskId) => {
    const updatedDogs = dogs.map(dog =>
      dog.id === dogId
        ? {
            ...dog,
            tasks: dog.tasks.map(task =>
              task.id === taskId ? { ...task, status: task.status === 'incompleta' ? 'completa' : 'incompleta' } : task
            ),
          }
        : dog
    );
    setDogs(updatedDogs);
  };

  const deleteTask = (dogId, taskId) => {
    const updatedDogs = dogs.map(dog =>
      dog.id === dogId
        ? { ...dog, tasks: dog.tasks.filter(task => task.id !== taskId) }
        : dog
    );
    setDogs(updatedDogs);
  };

  return { addTask, toggleTaskStatus, deleteTask };
};

export default useTasks;