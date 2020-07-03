import React from 'react'

const Task = ({task}) => {
  return (
    <li>
      <p>{task.taskName}</p>
    </li>
  );
}
 
export default Task;