import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const kBaseUrl = "http://localhost:5000";

const getAllTasks = () => {
  return axios
    .get(`${kBaseUrl}/tasks`)
    .then((response) => {
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

// eslint-disable-next-line camelcase
const updateTaskApi = (id, isComplete) => {
  // eslint-disable-next-line camelcase
  const endpoint = isComplete ? 'mark_complete' : 'mark_incomplete';

  return axios
    .patch(`${kBaseUrl}/tasks/${id}/${endpoint}`)
    .then((response) => {
      return convertFromApi(response.data.task);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteTaskApi = (id) => {
  return axios
    .delete(`${kBaseUrl}/tasks/${id}`)
    .then((response) => {
      return response.data.details;
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertFromApi = (apiTask) => {
  const {is_complete: isComplete, ...task} = apiTask;
  const newTask = {isComplete, ...task};
  return newTask;
};

const App = () => {

  const [tasksData, setTask] = useState([]);

  const fetchTasks = () => {
    getAllTasks()
    .then((tasks) => {
      setTask(tasks);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  const updateTask = (id, isComplete) => {
    updateTaskApi(id, isComplete).then((updatedTask) => {
      setTask((oldData) => {
        return oldData.map((task) => {
          if (task.id === id) {
            return updatedTask;
          }
          return task;
          });
        });
      });
    };

  const onUnregisterTask = (id) => {
    deleteTaskApi(id)
    .then((deletedTask) => {
      setTask(tasksData.filter((task) => {
        return task.id !== deletedTask;
    }));
   });
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
        onUnregisterTask={onUnregisterTask}
        /></div>
      </main>
    </div>
  );
  };

export default App;

