import React from 'react';
import Task from './Task';

const AllTasks = ({tasks, editTask, completeTask, handleSubmit, deleteTask}) => {
  return (
    <div className='all-tasks'>
      {tasks.map((task, index) => (
        <Task key={index} info={task} taskId={index} editTask={editTask} completeTask={completeTask} handleSubmit={handleSubmit} deleteTask={deleteTask}/>
      ))}
    </div>
  )
}

export default AllTasks;