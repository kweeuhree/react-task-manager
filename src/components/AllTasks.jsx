import React from 'react';
import Task from './Task';

const AllTasks = ({tasks}) => {
  return (
    <div className='all-tasks'>
      {tasks.map((task, index) => (
        <Task key={index} info={task} />
      ))}
    </div>
  )
}

export default AllTasks;