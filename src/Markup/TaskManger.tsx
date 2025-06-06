import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


const initialTask =  { text: 'Finish task manager project', completed: false }
function TaskManager() {

  const [tasks, setTasks] = useState([initialTask]);
  const [task, setTask] = useState('');

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task.trim(), completed: false }]);
    setTask('');
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center  p-10 ">
      <div className="w-full max-w-md bg-slate-500 p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center text-white">Task Manager</h1>
        <div className="flex justify-between items-center mb-4">
          <input
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
            type="text"
            value={task}
            onChange={handleInput}
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddTask}
            className="text-white bg-amber-600 p-2 px-4 rounded-lg hover:bg-amber-500 transition duration-200"
          >
            Add Task
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-slate-600 text-white rounded mb-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <span className={t.completed ? 'line-through text-gray-300' : ''}>{t.text}</span>
              </div>
              <DeleteIcon
                onClick={() => handleDeleteTask(index)}
                className="text-red-400 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
