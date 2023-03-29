export  const Tasks = (prop) => {
    return (
        <div className='tasks'>
          <h1 className='taskName' style={{backgroundColor: prop.complete ? "#FF6998" : "white", color: prop.complete ? "white" : "#FF6998"}}>{prop.taskName}</h1>
          <button className='completeBtn' onClick={() => prop.completedTask(prop.id)}>Complete</button>
          <button className='deleteBtn' onClick={() => prop.deleteTask(prop.id)} >Delete</button>
        </div>
      );
};