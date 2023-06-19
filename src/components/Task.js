import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({id, title, isComplete, onUpdateTask }) => {

  const onClickButton = () => {
    onUpdateTask ({
        id: id,
        title: title,
        isComplete: !isComplete
    });
  };
    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App

  const buttonColor = isComplete ? 'tasks__item__toggle--completed' : '';
  
  return (
    <li className="tasks__item">
      <button className={buttonColor} onClick={onClickButton}>{title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdateTask: PropTypes.func.isRequired
};

export default Task;