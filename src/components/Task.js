import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import './Task.css';

const Task = (props) => {
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle ${buttonClass}`}>{props.title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;