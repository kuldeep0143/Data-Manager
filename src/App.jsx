import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (Array.isArray(storedTasks)) {
      setTasks(storedTasks);
    } else {
      setTasks([]);
     }
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32'>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
