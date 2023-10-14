import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: '',
    name: '',
    status: 'todo',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  
    setTasks((prev) => {
      const updatedTasks = [...prev, { ...task, id: uuidv4() }];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    setTask({
      id: '',
      name: '',
      status: 'todo',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='border-2 border-gray-800 rounded-lg mr-4 h-12 w-64 px-1 mt-12 '
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, name: e.target.value })
        }
      />
      <button className='bg-blue-500 rounded-md px-4 h-12 text-black font-bold' type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateTask;
