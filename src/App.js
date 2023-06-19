import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [tasksData, setTask] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);

  const updateTask = taskToUpdate => {
    const tasks = tasksData.map(task => {
      if (task.id === taskToUpdate.id) {
        return taskToUpdate;
      } else {
        return task;
      }
    });

    setTask(tasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList 
        tasksData={tasksData} 
        onUpdateTask={updateTask}
        /></div>
      </main>
    </div>
  );
};

export default App;
