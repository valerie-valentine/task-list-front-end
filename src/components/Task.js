import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {

  const onClickButton = () => {
    const updatedTask = {
        id: props.id,
        titleData: props.title,
        isCompleteData: !props.isComplete
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    props.onUpdate(updatedTask);
};
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle ${buttonClass}`}>{props.title}</button>
      <button className="tasks__item__remove button">x</button>
      <button onClick={onClickButton}>Toggle if {props.isComplete} is completed</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Task;