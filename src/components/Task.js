import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onClickCallback, onDeleteCallback}) => {

  // const onClickButton = () => {
  //   onUpdateTask({
  //       id: id,
  //       title: title,
  //       isComplete: !isComplete,
  //   });
  // };

  const updateTaskWithId = () => {
    onClickCallback(id, !isComplete);
  };

  const onClickRemove = () => {
    onDeleteCallback(id);
  };


    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App

  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  
  return (
    <li className="tasks__item">
      <button onClick={updateTaskWithId} className={`tasks__item__toggle ${buttonClass}`}>{title}</button>
      <button className="tasks__item__remove button" onClick={onClickRemove}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired
};

export default Task;