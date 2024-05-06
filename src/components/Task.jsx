import React from 'react';

const Task = ({info, taskId, editTask, completeTask, handleSubmit, deleteTask}) => {
  return (
    <div className='task-container'>
      <div className="task">{info}</div>
      <div className='button-container'>
        <button onClick={(e)=>{handleSubmit(e, editTask)}}>Edit</button>
        {/* onclick change innerHtml of .task to be a input textarea and pass input into handleInput */}
        <button onClick={()  => completeTask()}>Complete</button>
        <button onClick={() => deleteTask()}>Delete</button>
      </div>
    </div>
  )
}

export default Task;