import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasksData, onClickCallback, onDeleteCallback  }) => {
  const taskComponents = tasksData.map((task) => {
    return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onClickCallback={onClickCallback}
          onDeleteCallback={onDeleteCallback}
        />
    );
  });
  return <ul className="tasks__list no-bullet">{taskComponents}</ul>;
};

  
  // const getTaskListJSX = (tasks) => {
  //   return tasksData.map((task) => {
  //     return (
  //       <Task
  //         key={task.id}
  //         id={task.id}
  //         title={task.title}
  //         isComplete={task.isComplete}
  //         onUpdate={tasks.onUpdateTask}
  //       />
  //     );
  //   });
  // };
  // return <ul className="tasks__list no-bullet">{getTaskListJSX(tasksData)}</ul>;
// };

TaskList.propTypes = {
  tasksData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onClickCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default TaskList;
