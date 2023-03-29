import './App.css';
import { useState } from 'react';
import { Tasks } from './TaskComponent.js'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) =>{
    setNewTask(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      complete: false
    }
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    document.querySelector(".input").value = "";
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task)=>{
      return task.id === id ? false : true;
    })
    setTodoList(newTodoList);
  }

  const completedTask = (id) => {
    const newTodoList = todoList.map((task) => {
      if(task.id === id){
        return { ...task, complete: true}
      }else{
        return task;
      }
    })
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <div className='addTask' onChange={handleChange}>
        <input className='input' type='text'/>
        <button className='addBtn' onClick={addTask} > Add Task </button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Tasks taskName={task.taskName} id={task.id} deleteTask={deleteTask} complete={task.complete} completedTask={completedTask} />
        })}
      </div>
    </div>
  );
}

export default App;
