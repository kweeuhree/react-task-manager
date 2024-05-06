import './App.css';
import AllTasks from './components/AllTasks';
// import data from './models/data';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState({
    allTasks: [],
    newTask: '',
    editTask: null,
    completedTasks: [],
    showCompleted: false
  });

  const addTask = (task) => {
    // grab user input, stringify, add to list
    setTasks({
      ...tasks,
      allTasks: [...tasks.allTasks, task]
    });
  };

  const editTask = (task) => {
    //replace old body with new body

    //filter through tasks, if task ids match, filter out
    // setTasks({
    //   ...tasks,
    //   allTasks: allTasks.filter((task) => task.taskId === taskId)
    // })
  };

  const completeTask = () => {
    //toggle complete, push to completedTasks array
  };

  const deleteTask = () => {
    // display what is 
  };

  const handleSubmit = (e, callback) => {
    // handle user input
    e.preventDefault(); 
    const userInput = e.target.elements.task.value.trim();

    if(!userInput) {
      alert('Include a task');
    } else {
      callback(userInput);
      e.target.reset();
    }
  };
  
  return (
    <div className="App">
      {/* form container */}
      <form className='task-form' onSubmit={(e) => handleSubmit(e, addTask)}>
        <input type="text" name="task" placeholder='enter a new task'></input>
        <button type="submit">Add Task</button>
      </form>
      {/* all uncompleted tasks */}
      <div className='uncompleted-tasks'>
        <AllTasks tasks={tasks.allTasks} editTask={editTask} completeTask={completeTask} handleSubmit={handleSubmit} deleteTask={deleteTask}/>
      </div>
      {tasks.showCompleted && (
        <div className='completed-tasks'>
          <AllTasks tasks={tasks.completedTasks} />
        </div>
      )}
    </div>
  );
}

export default App;
