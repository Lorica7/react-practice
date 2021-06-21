import Header from "./Components/Header.js"
import { useState } from 'react';
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask.js";




const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([])

  const deleteItem = (id) => {
     setTasks (tasks.filter((task) => task.id !== id))
    
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task
    )
    )
  }

  return (
    <div className="container">
      <Header title="Goal Getter: Tasks" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      
      {showAddTask &&
        <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteItem} onToggle={toggleReminder}/>) :
        (
          "No Tasks to show"
       )}
      
    
    </div>
  );
};


export default App;
